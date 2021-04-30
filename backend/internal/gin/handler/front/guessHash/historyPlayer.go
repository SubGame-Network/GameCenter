package guessHash

import (
	"github.com/gin-gonic/gin"
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
	subgameSvcHelper "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
	"github.com/shopspring/decimal"
)

type HistoryPlayerRequest struct {
	From    time.Time `form:"from"`
	To      time.Time `form:"to"`
	Address string    `form:"address"`
}

type HistoryPlayerResponse struct {
	Room        string `json:"room"`
	BlockId     string `json:"blockId"`
	TotalBet    string `json:"totalBet"`
	BetLimit    string `json:"betLimit"`
	YourBet     string `json:"bet"`
	YourOddEven string `json:"oddEven"`
	Draw        string `json:"draw"`
	Result      string `json:"result"`
	Timestamp   string `json:"timestamp"`
}

func HistoryPlayer(c *gin.Context) {
	var req HistoryPlayerRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		zap.S().Infof("err: %v req: %v", err, c.Request)
		handler.Failed(c, domain.ErrorBadRequest)
		return
	}

	pubkey := ""
	if req.Address != "" {
		var err error
		pubkey, err = subgameSvcHelper.AddressToPubkey(req.Address)
		if err != nil {
			zap.S().Infof("err: %v", err)
			handler.Failed(c, domain.ErrorAddress)
			return
		}
	}

	subGameRepo, err := provider.NewSubGameRepo()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}

	bets, err := subGameRepo.GuessHashHistoryPlayerBets(req.From, req.To)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	betMap := make(map[string]decimal.Decimal)
	for _, val := range bets {
		betMap[val.GameId] = betMap[val.GameId].Add(val.Stake)
	}

	output := []HistoryPlayerResponse{}
	for _, val := range bets {
		if pubkey != "" && val.UserPubkey != pubkey {
			continue
		}

		totalBet := "0"
		if bet, ok := betMap[val.GameId]; ok {
			totalBet = bet.String()
		}

		draw := "-"
		result := "-"
		timestamp := "-"
		if val.Status == domain.GuessHashRoomStatusOver {
			draw = val.GuessBlockOddEven

			result = val.ResultDraw.String()

			timestamp = val.DoneAt.Format(time.RFC3339)
		}

		output = append(output, HistoryPlayerResponse{
			Room:        val.GameId,
			BlockId:     val.GuessBlockHeight,
			TotalBet:    totalBet,
			BetLimit:    val.Pool.String(),
			YourBet:     val.Stake.String(),
			YourOddEven: val.OddEven,
			Draw:        draw,
			Result:      result,
			Timestamp:   timestamp,
		})
	}

	handler.Success(c, output)
}
