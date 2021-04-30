package service

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/pkg/errors"
	"github.com/shopspring/decimal"
	"strconv"
	"go.uber.org/zap"
	"time"
)

func (svc *subgameService) EventGuessHashGameOver(blockHash string, e domain.GameGuessHashModule_GameOver) error {
	pubkey, err := TypesAccountIDToPubkey(e.From)
	if err != nil {
		return errors.WithStack(err)
	}

	addr, err := PubkeyToGenericAddress(pubkey)
	if err != nil {
		return errors.WithStack(err)
	}

	amount, err := decimal.NewFromString(e.Value.String())
	if err != nil {
		return errors.WithStack(err)
	}

	gameId := strconv.FormatUint(uint64(e.GameId), 10)

	// event會給開獎區塊hash
	guessBlockHash := e.BlockHash.Hex()

	// 判斷遊戲結果是單或雙
	guessBlockOddEven := domain.GuessHashGameMode[uint8(e.OddEven)]

	zap.S().Infow("new event",
		"event", "GuessHashGameOver",
		"hash", blockHash,
		"guessBlockHash", guessBlockHash,
		"pubkey", pubkey,
		"address", addr,
		"amount", amount,
		"gameId", gameId,
		"oddEven", guessBlockOddEven,
	)

	room, err := svc.repo.GetGuessHashRoom(gameId)
	if err != nil {
		return errors.WithStack(err)
	}
	if room == nil {
		return nil
	}

	doneAt := time.Now()
	input := &domain.GuessHashRoom{
		GamePlat:          room.GamePlat,
		GameId:            room.GameId,
		GuessBlockHeight:  room.GuessBlockHeight,
		GuessBlockHash:    guessBlockHash,
		GuessBlockOddEven: guessBlockOddEven,
		UserPubkey:        room.UserPubkey,
		UserAddress:       room.UserAddress,
		Status:            domain.GuessHashRoomStatusOver,
		Pool:              room.Pool,
		TxHash:            room.TxHash,
		DoneAt:            room.DoneAt,
		ResultPool:        amount,
		ResultTxHash:      blockHash,
		ResultDoneAt:      &doneAt,
	}
	svc.repo.InsertUpdateGuessHashRoom(input)

	SGPoint, err := svc.GetBlockHashSGPoint(blockHash, pubkey)
	if err != nil {
		return errors.WithStack(err)
	}

	// 新增TxRecord記錄
	inputRecord := &domain.TxRecord{
		GamePlat:        domain.GamePlatGuessHash,
		UserPubkey:      pubkey,
		UserAddress:     addr,
		SGBalanceChange: decimal.NewFromInt(0),
		SGPoint:         SGPoint,
		SGPointChange:   amount,
		TxHash:          blockHash,
		DoneAt:          &doneAt,
	}
	svc.repo.InsertTxRecord(inputRecord)

	// 修改BetRecord沒領獎的都是輸家
	err = svc.repo.UpdateGuessHashBetLoser(room.GameId, guessBlockHash, &doneAt)
	if err != nil {
		return errors.WithStack(err)
	}

	return nil
}

