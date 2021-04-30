package service

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/pkg/errors"
	"github.com/shopspring/decimal"
	"time"
	"go.uber.org/zap"
)

func (svc *subgameService) EventChipsRedemption(blockHash string, e domain.Chips_Redemption) error {
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

	SGPoint, err := svc.GetBlockHashSGPoint(blockHash, pubkey)
	if err != nil {
		return errors.WithStack(err)
	}

	zap.S().Infow("new event",
		"event", "RedemptionChips",
		"hash", blockHash,
		"pubkey", pubkey,
		"address", addr,
		"amount", amount,
		"SGPoint", SGPoint,
	)

	doneAt := time.Now()
	input := &domain.TxRecord{
		GamePlat:        domain.GamePlatSwap,
		UserPubkey:      pubkey,
		UserAddress:     addr,
		SGBalanceChange: amount,
		SGPoint:         SGPoint,
		SGPointChange:   decimal.NewFromInt(0).Sub(amount),
		TxHash:          blockHash,
		DoneAt:          &doneAt,
	}
	svc.repo.InsertTxRecord(input)

	return nil
}
