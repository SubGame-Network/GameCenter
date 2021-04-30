package gorm

import (
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/shopspring/decimal"
	subgameSvcHelper "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
)

type TxRecord struct {
	ID              uint64 `gorm:"auto_increment primary_key"`
	GamePlat        string `gorm:"type:varchar(255);"`
	UserPubkey      string `gorm:"type:varchar(255);"`
	UserAddress     string `gorm:"type:varchar(255);"`
	SGBalanceChange string `gorm:"type:varchar(255);"`
	SGPoint         string `gorm:"type:varchar(255);"`
	SGPointChange   string `gorm:"type:varchar(255);"`
	TxHash          string `gorm:"type:varchar(255);"`
	DoneAt          *time.Time
	UpdatedAt       time.Time
	CreatedAt       time.Time
}

func TxRecordDomainToModel(input *domain.TxRecord) *TxRecord {
	return &TxRecord{
		GamePlat:        string(input.GamePlat),
		UserPubkey:      input.UserPubkey,
		UserAddress:     input.UserAddress,
		SGBalanceChange: input.SGBalanceChange.String(),
		SGPoint:         input.SGPoint.String(),
		SGPointChange:   input.SGPointChange.String(),
		TxHash:          input.TxHash,
		DoneAt:          input.DoneAt,
	}
}

func TxRecordModelToDomain(input *TxRecord) *domain.TxRecord {
	SGBalanceChange, _ := decimal.NewFromString(input.SGBalanceChange)
	SGPoint, _ := decimal.NewFromString(input.SGPoint)
	SGPointChange, _ := decimal.NewFromString(input.SGPointChange)

	return &domain.TxRecord{
		ID:              input.ID,
		GamePlat:        domain.GamePlatType(input.GamePlat),
		UserPubkey:      input.UserPubkey,
		UserAddress:     input.UserAddress,
		SGBalanceChange: subgameSvcHelper.DotToUnit(SGBalanceChange),
		SGPoint:         subgameSvcHelper.DotToUnit(SGPoint),
		SGPointChange:   subgameSvcHelper.DotToUnit(SGPointChange),
		TxHash:          input.TxHash,
		DoneAt:          input.DoneAt,
		UpdatedAt:       input.UpdatedAt,
		CreatedAt:       input.CreatedAt,
	}
}
