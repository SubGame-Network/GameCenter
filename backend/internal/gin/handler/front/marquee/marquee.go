package marquee

import (
	"github.com/gin-gonic/gin"
	"github.com/guanfantech/SubGameCenterService/domain"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
)

func Marquee(c *gin.Context) {
	subGameRepo, err := provider.NewSubGameRepo()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}

	output := []domain.MarqueeResponse{}

	// guess hash 跑馬燈 贏錢紀錄
	guessHashBets, err := subGameRepo.GuessHashWinnerMarquee()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	for _, val := range guessHashBets {
		output = append(output, domain.MarqueeResponse{
			Type:    domain.GamePlatMap[domain.GamePlatGuessHash],
			Room:    val.GameId,
			Address: val.UserAddress,
			SGP:     val.ResultDraw.String(),
		})
	}

	handler.Success(c, output)
}
