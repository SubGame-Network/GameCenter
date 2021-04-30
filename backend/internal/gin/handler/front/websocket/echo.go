package websocket

import (
	"github.com/gin-gonic/gin"
	"github.com/guanfantech/SubGameCenterService/domain"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"time"
)

func Echo(c *gin.Context) {
	ws, err := domain.Upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	WsPool[ws] = time.Now().Format(time.RFC3339)

	for ; true; <-time.Tick(2 * time.Second) {
		_, _, err := ws.ReadMessage()
		if err != nil {
			WsMarqueeClose(ws)
			break
		}
	}
}
