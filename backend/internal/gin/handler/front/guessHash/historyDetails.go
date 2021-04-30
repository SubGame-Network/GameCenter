package guessHash

import (
	"github.com/gin-gonic/gin"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
	"time"
)

type HistoryDetailsResponse struct {
	GameInfo  HistoryDetailsItems      `json:"historyDetailInfo"`
	BetRecord []HistoryDetailsBetItems `json:"historyDetailBetRecord"`
}
type HistoryDetailsItems struct {
	Room              string `json:"room"`
	BetLimit          string `json:"betLimit"`
	CreateTime        string `json:"createTime"`
	BookmakerAddress  string `json:"bookmakerAddress"`
	BlockId           string `json:"blockId"`
	GuessBlockHash    string `json:"hash"`
	GuessBlockOddEven string `json:"draw"`
	ResultPool        string `json:"result"`
	Status            string `json:"status"`
}
type HistoryDetailsBetItems struct {
	Address string `json:"address"`
	OddEven string `json:"oddEven"`
	Bet     string `json:"bet"`
	Result  string `json:"result"`
}

func HistoryDetails(c *gin.Context) {
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
	BetRecord := []HistoryDetailsBetItems{}
	for _, val := range bets {
		BetRecord = append(BetRecord, HistoryDetailsBetItems{
			Address: val.UserAddress,
			OddEven: val.OddEven,
			Bet:     val.Stake.String(),
			Result:  val.ResultDraw.String(),
		})
	}

	guessBlockHeight := "-"
	guessBlockHash := "-"
	guessBlockOddEven := "-"
	if room.Status == domain.GuessHashRoomStatusOver {
		guessBlockHeight = room.GuessBlockHeight
		guessBlockHash = room.GuessBlockHash
		guessBlockOddEven = room.GuessBlockOddEven
	}
	GameInfo := HistoryDetailsItems{
		Room:              room.GameId,
		BetLimit:          room.Pool.String(),
		CreateTime:        room.CreatedAt.Format(time.RFC3339),
		BookmakerAddress:  room.UserAddress,
		BlockId:           guessBlockHeight,
		GuessBlockHash:    guessBlockHash,
		GuessBlockOddEven: guessBlockOddEven,
		ResultPool:        room.ResultPool.String(),
		Status:            string(room.Status),
	}

	output := HistoryDetailsResponse{
		GameInfo:  GameInfo,
		BetRecord: BetRecord,
	}
	handler.Success(c, output)
}
