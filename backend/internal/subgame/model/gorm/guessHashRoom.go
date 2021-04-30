package gorm

import (
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/shopspring/decimal"
	subgameSvcHelper "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
)

type GuessHashRoom struct {
	ID                uint64 `gorm:"auto_increment primary_key"`
	GamePlat          string `gorm:"type:varchar(255); uniqueIndex:unique_game"`
	GameId            string `gorm:"type:varchar(255); uniqueIndex:unique_game"`
	GuessBlockHeight  string `gorm:"type:varchar(255);"`
	GuessBlockHash    string `gorm:"type:varchar(255);"`
	GuessBlockOddEven string `gorm:"type:varchar(255);"`
	UserPubkey        string `gorm:"type:varchar(255);"`
	UserAddress       string `gorm:"type:varchar(255);"`
	Status            string `gorm:"type:varchar(255); default:1"`
	Pool              string `gorm:"type:varchar(255)"`
	TxHash            string `gorm:"type:varchar(255);"`
	DoneAt            *time.Time
	ResultPool        string `gorm:"type:varchar(255)"`
	ResultTxHash      string `gorm:"type:varchar(255);"`
	ResultDoneAt      *time.Time
	UpdatedAt         time.Time
	CreatedAt         time.Time
}

func GuessHashRoomDomainToModel(input *domain.GuessHashRoom) *GuessHashRoom {
	return &GuessHashRoom{
		GamePlat:          string(input.GamePlat),
		GameId:            input.GameId,
		GuessBlockHeight:  input.GuessBlockHeight,
		GuessBlockHash:    input.GuessBlockHash,
		GuessBlockOddEven: input.GuessBlockOddEven,
		UserPubkey:        input.UserPubkey,
		UserAddress:       input.UserAddress,
		Status:            string(input.Status),
		Pool:              input.Pool.String(),
		TxHash:            input.TxHash,
		DoneAt:            input.DoneAt,
		ResultPool:        input.ResultPool.String(),
		ResultTxHash:      input.ResultTxHash,
		ResultDoneAt:      input.ResultDoneAt,
	}
}

func GuessHashRoomModelToDomain(input *GuessHashRoom) *domain.GuessHashRoom {
	pool, _ := decimal.NewFromString(input.Pool)
	resultPool, _ := decimal.NewFromString(input.ResultPool)

	return &domain.GuessHashRoom{
		ID:                input.ID,
		GamePlat:          domain.GamePlatType(input.GamePlat),
		GameId:            input.GameId,
		GuessBlockHeight:  input.GuessBlockHeight,
		GuessBlockHash:    input.GuessBlockHash,
		GuessBlockOddEven: input.GuessBlockOddEven,
		UserPubkey:        input.UserPubkey,
		UserAddress:       input.UserAddress,
		Status:            domain.GuessHashRoomStatusType(input.Status),
		Pool:              subgameSvcHelper.DotToUnit(pool),
		TxHash:            input.TxHash,
		DoneAt:            input.DoneAt,
		ResultPool:        subgameSvcHelper.DotToUnit(resultPool),
		ResultTxHash:      input.ResultTxHash,
		ResultDoneAt:      input.ResultDoneAt,
		UpdatedAt:         input.UpdatedAt,
		CreatedAt:         input.CreatedAt,
	}
}
