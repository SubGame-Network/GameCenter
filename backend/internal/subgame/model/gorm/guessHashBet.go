package gorm

import (
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/shopspring/decimal"
	subgameSvcHelper "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
)

type GuessHashBet struct {
	ID           uint64 `gorm:"auto_increment primary_key"`
	GamePlat     string `gorm:"type:varchar(255); uniqueIndex:unique_bet"`
	GameId       string `gorm:"type:varchar(255); uniqueIndex:unique_bet"`
	BetId        string `gorm:"type:varchar(255); uniqueIndex:unique_bet"`
	UserPubkey   string `gorm:"type:varchar(255);"`
	UserAddress  string `gorm:"type:varchar(255);"`
	Status       string `gorm:"type:varchar(255); default:1"`
	Stake        string `gorm:"type:varchar(255)"`
	OddEven      string `gorm:"type:varchar(255);"`
	TxHash       string `gorm:"type:varchar(255);"`
	DoneAt       *time.Time
	ResultDraw   string `gorm:"type:varchar(255)"`
	ResultTxHash string `gorm:"type:varchar(255);"`
	ResultDoneAt *time.Time
	UpdatedAt    time.Time
	CreatedAt    time.Time
}

func GuessHashBetDomainToModel(input *domain.GuessHashBet) *GuessHashBet {
	return &GuessHashBet{
		GamePlat:     string(input.GamePlat),
		GameId:       input.GameId,
		BetId:        input.BetId,
		UserPubkey:   input.UserPubkey,
		UserAddress:  input.UserAddress,
		Status:       string(input.Status),
		Stake:        input.Stake.String(),
		OddEven:      input.OddEven,
		TxHash:       input.TxHash,
		DoneAt:       input.DoneAt,
		ResultDraw:   input.ResultDraw.String(),
		ResultTxHash: input.ResultTxHash,
		ResultDoneAt: input.ResultDoneAt,
	}
}

func GuessHashBetModelToDomain(input *GuessHashBet) *domain.GuessHashBet {
	stake, _ := decimal.NewFromString(input.Stake)
	resultDraw, _ := decimal.NewFromString(input.ResultDraw)

	return &domain.GuessHashBet{
		ID:           input.ID,
		GamePlat:     domain.GamePlatType(input.GamePlat),
		GameId:       input.GameId,
		BetId:        input.BetId,
		UserPubkey:   input.UserPubkey,
		UserAddress:  input.UserAddress,
		Status:       domain.GuessHashRoomStatusType(input.Status),
		Stake:        subgameSvcHelper.DotToUnit(stake),
		OddEven:      input.OddEven,
		TxHash:       input.TxHash,
		DoneAt:       input.DoneAt,
		ResultDraw:   subgameSvcHelper.DotToUnit(resultDraw),
		ResultTxHash: input.ResultTxHash,
		ResultDoneAt: input.ResultDoneAt,
		UpdatedAt:    input.UpdatedAt,
		CreatedAt:    input.CreatedAt,
	}
}
