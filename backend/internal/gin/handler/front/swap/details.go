package swap

import (
	"github.com/gin-gonic/gin"
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
	subgameSvcHelper "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
)

type DetailsRequest struct {
	From time.Time `form:"from"`
	To   time.Time `form:"to"`
}

func Details(c *gin.Context) {
	var req DetailsRequest
	if err := c.ShouldBindQuery(&req); err != nil {
		zap.S().Infof("err: %v req: %v", err, c.Request)
		handler.Failed(c, domain.ErrorBadRequest)
		return
	}

	address := c.Param("address")
	pubkey, err := subgameSvcHelper.AddressToPubkey(address)
	if err != nil {
		zap.S().Infof("err: %v", err)
		handler.Failed(c, domain.ErrorAddress)
		return
	}

	subGameRepo, err := provider.NewSubGameRepo()
	data, err := subGameRepo.UserTxRecords(pubkey, req.From, req.To)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}

	output := []TxRecordResponse{}
	for _, val := range data {
		output = append(output, DomainToResponse(val))
	}
	handler.Success(c, output)
}
