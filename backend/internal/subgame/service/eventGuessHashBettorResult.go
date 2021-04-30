package service

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/pkg/errors"
	"github.com/shopspring/decimal"
	"strconv"
	"go.uber.org/zap"
	"time"
	wsHelper "github.com/guanfantech/SubGameCenterService/internal/gin/handler/front/websocket"
	"encoding/json"
)

func (svc *subgameService) EventGuessHashBettorResult(blockHash string, e domain.GameGuessHashModule_BettorResult) error {
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

	// event會給開獎區塊hash
	guessBlockHash := e.BlockHash.Hex()

	gameId := strconv.FormatUint(uint64(e.GameId), 10)
	betId := strconv.FormatUint(uint64(e.BetId), 10)

	zap.S().Infow("new event",
		"event", "GuessHashBettorResult",
		"hash", blockHash,
		"guessBlockHash", guessBlockHash,
		"pubkey", pubkey,
		"address", addr,
		"amount", amount,
		"gameId", gameId,
		"betId", betId,
	)

	betRecord, err := svc.repo.GetGuessHashBet(gameId, betId)
	if err != nil {
		return errors.WithStack(err)
	}
	if betRecord == nil {
		return nil
	}

	doneAt := time.Now()
	input := &domain.GuessHashBet{
		GamePlat:     betRecord.GamePlat,
		GameId:       betRecord.GameId,
		BetId:        betRecord.BetId,
		UserPubkey:   betRecord.UserPubkey,
		UserAddress:  betRecord.UserAddress,
		Status:       domain.GuessHashRoomStatusOver,
		Stake:        betRecord.Stake,
		OddEven:      betRecord.OddEven,
		TxHash:       betRecord.TxHash,
		DoneAt:       betRecord.DoneAt,
		ResultDraw:   amount,
		ResultTxHash: guessBlockHash,
		ResultDoneAt: &doneAt,
	}
	svc.repo.InsertUpdateGuessHashBet(input)

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

	// 推播跑馬燈訊息
	marqueeData := domain.MarqueeResponse{
		Type:    domain.GamePlatMap[domain.GamePlatGuessHash],
		Room:    gameId,
		Address: addr,
		SGP:     DotToUnit(amount).String(),
	}
	marqueeText, _ := json.Marshal(marqueeData)
	err = wsHelper.WebsocketWriteMessage(domain.WsTypeMarquee, string(marqueeText))
	if err != nil {
		zap.S().Warn(err)
	}

	return nil
}

