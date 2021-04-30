package service

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/pkg/errors"
	"github.com/shopspring/decimal"
	"strconv"
	"go.uber.org/zap"
	"time"
	wsHelper "github.com/guanfantech/SubGameCenterService/internal/gin/handler/front/websocket"
)

func (svc *subgameService) EventGuessHashBet(blockHash string, e domain.GameGuessHashModule_Bet) error {
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
	betId := strconv.FormatUint(uint64(e.BetId), 10)
	gameMode := domain.GuessHashGameMode[uint8(e.GameMode)]

	zap.S().Infow("new event",
		"event", "GuessHashBet",
		"hash", blockHash,
		"pubkey", pubkey,
		"address", addr,
		"amount", amount,
		"gameId", gameId,
		"gameMode", gameMode,
		"betId", betId,
	)

	doneAt := time.Now()
	var resultDoneAt time.Time
	input := &domain.GuessHashBet{
		GamePlat:     domain.GamePlatGuessHash,
		GameId:       gameId,
		BetId:        betId,
		UserPubkey:   pubkey,
		UserAddress:  addr,
		Status:       domain.GuessHashRoomStatusStart,
		Stake:        amount,
		OddEven:      gameMode,
		TxHash:       blockHash,
		DoneAt:       &doneAt,
		ResultDraw:   amount,
		ResultTxHash: "",
		ResultDoneAt: &resultDoneAt,
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
		SGPointChange:   decimal.NewFromInt(0).Sub(amount),
		TxHash:          blockHash,
		DoneAt:          &doneAt,
	}
	svc.repo.InsertTxRecord(inputRecord)

	// websocket推播訊息
	websocketText := gameId
	err = wsHelper.WebsocketWriteMessage(domain.WsTypeGuessHashBet, websocketText)
	if err != nil {
		zap.S().Warn(err)
	}

	return nil
}

