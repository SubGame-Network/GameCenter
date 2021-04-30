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

func (svc *subgameService) EventGuessHashCreateGame(blockHash string, e domain.GameGuessHashModule_CreateGame) error {
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
	guessBlockHeight := strconv.FormatUint(uint64(e.BlockNum), 10)

	zap.S().Infow("new event",
		"event", "GuessHashCreateGame",
		"hash", blockHash,
		"pubkey", pubkey,
		"address", addr,
		"amount", amount,
		"gameId", gameId,
		"guessBlockHeight", guessBlockHeight,
	)

	doneAt := time.Now()
	var resultDoneAt time.Time
	input := &domain.GuessHashRoom{
		GamePlat:          domain.GamePlatGuessHash,
		GameId:            gameId,
		GuessBlockHeight:  guessBlockHeight,
		GuessBlockHash:    "",
		GuessBlockOddEven: "",
		UserPubkey:        pubkey,
		UserAddress:       addr,
		Status:            domain.GuessHashRoomStatusStart,
		Pool:              amount,
		TxHash:            blockHash,
		DoneAt:            &doneAt,
		ResultPool:        amount,
		ResultTxHash:      "",
		ResultDoneAt:      &resultDoneAt,
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
		SGPointChange:   decimal.NewFromInt(0).Sub(amount),
		TxHash:          blockHash,
		DoneAt:          &doneAt,
	}
	svc.repo.InsertTxRecord(inputRecord)

	// websocket推播訊息
	websocketText := doneAt.Format(time.RFC3339)
	err = wsHelper.WebsocketWriteMessage(domain.WsTypeGuessHashCreateGame, websocketText)
	if err != nil {
		zap.S().Warn(err)
	}

	return nil
}
