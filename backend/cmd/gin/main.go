package main

import (
	"github.com/guanfantech/SubGameCenterService/internal/provider"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/logger"
	"time"
	"github.com/guanfantech/SubGameCenterService/internal/gin/route"
)

func main() {
	EventListener()
	config := provider.NewConfig()
	router := route.SetupRouter(config)
	router.Run(config.Gin.Host + ":" + config.Gin.Port)
}

func EventListener() {
	logger := logger.NewLogger()
	zap.ReplaceGlobals(logger)
	defer logger.Sync()

	subgameSvc, err := provider.NewSubGameService()
	if err != nil {
		zap.S().Error(err)
	}
	if subgameSvc == nil {
		return
	}

	go func() {
		for ; true; <-time.Tick(12 * time.Second) {
			err = subgameSvc.EventListener()
			if err != nil {
				zap.S().Errorw("", err)
			}
		}
	}()

	go subgameSvc.FixBlockGap()
}
