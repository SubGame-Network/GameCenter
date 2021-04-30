package guessHash

import (
	"github.com/gin-gonic/gin"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/domain"
	"time"
	"github.com/shopspring/decimal"
)

type GameCenterResponse struct {
	Room     string `json:"room"`
	BlockId  string `json:"blockId"`
	BetLimit string `json:"betLimit"`
	Status   string `json:"status"`
}

func GameCenter(c *gin.Context) {
	var from, to time.Time

	subGameRepo, err := provider.NewSubGameRepo()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}

	data, err := subGameRepo.AllGuessHashRoom(from, to)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}

	bets, err := subGameRepo.GroupGuessHashGameBets()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	betMap := make(map[string]decimal.Decimal)
	for _, val := range bets {
		betMap[val.GameId] = val.TotalBet
	}

	output := []GameCenterResponse{}
	for _, val := range data {
		totalBet := decimal.NewFromInt32(0)
		if total, ok := betMap[val.GameId]; ok {
			totalBet = total
		}

		// 池子滿了給遊戲結束狀態
		status := string(val.Status)
		if val.Pool.Cmp(totalBet) <= 0 {
			status = string(domain.GuessHashRoomStatusOver)
		}

		output = append(output, GameCenterResponse{
			Room:     val.GameId,
			BlockId:  val.GuessBlockHeight,
			BetLimit: val.Pool.String(),
			Status:   status,
		})
	}
	handler.Success(c, output)
}
