package middleware

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/logger"
)

func InitLogger(c *gin.Context) {
	logger := logger.NewLogger()
	zap.ReplaceGlobals(logger)
	defer logger.Sync() // flushes buffer, if any
	c.Next()
}
