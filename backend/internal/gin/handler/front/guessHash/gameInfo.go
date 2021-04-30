package guessHash

import (
	"github.com/gin-gonic/gin"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"go.uber.org/zap"
	"time"
	"github.com/shopspring/decimal"
)

type GameInfoResponse struct {
	GameInfo  GameInfoItems    `json:"gameInfo"`
	BetRecord []GameInfoBetItems `json:"betRecord"`
}
type GameInfoItems struct {
	Room           string `json:"room"`
	BlockId        string `json:"blockId"`
	BetLimit       string `json:"betLimit"`
	Status         string `json:"status"`
	TotalBet       string `json:"totalBet"`
	GameCreateBy   string `json:"gameCreateBy"`
	GameCreateTime string `json:"gameCreateTrime"`
	GuessBlockHash string `json:"resultBlockHash"`
}
type GameInfoBetItems struct {
	Address string `json:"address"`
	OddEven string `json:"oddEven"`
	Bet     string `json:"bet"`
	Time    string `json:"time"`
}

func GameInfo(c *gin.Context) {
	gameId := c.Param("room")

	subGameRepo, err := provider.NewSubGameRepo()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}

	room, err := subGameRepo.GetGuessHashRoom(gameId)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	if room == nil {
		handler.Failed(c, domain.ErrorNotFound)
		return
	}

	bets, err := subGameRepo.GetGuessHashRommAllBet(gameId)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	totalBet := decimal.NewFromInt(0)
	BetRecord := []GameInfoBetItems{}
	for _, val := range bets {
		BetRecord = append(BetRecord, GameInfoBetItems{
			Address: val.UserAddress,
			OddEven: val.OddEven,
			Bet:     val.Stake.String(),
			Time:    val.DoneAt.Format(time.RFC3339),
		})

		totalBet = totalBet.Add(val.Stake)
	}

	guessBlockHash := "-"
	if room.GuessBlockHash != "" {
		guessBlockHash = room.GuessBlockHash
	}

	// 池子滿了給遊戲結束狀態
	status := string(room.Status)
	if room.Pool.Cmp(totalBet) <= 0 {
		status = string(domain.GuessHashRoomStatusOver)
	}

	GameInfo := GameInfoItems{
		Room:           room.GameId,
		BlockId:        room.GuessBlockHeight,
		BetLimit:       room.Pool.String(),
		Status:         status,
		TotalBet:       totalBet.String(),
		GameCreateBy:   room.UserAddress,
		GameCreateTime: room.DoneAt.Format(time.RFC3339),
		GuessBlockHash: guessBlockHash,
	}

	output := GameInfoResponse{
		GameInfo:  GameInfo,
		BetRecord: BetRecord,
	}
	handler.Success(c, output)
}
