package route

import (
	"github.com/gin-gonic/gin"
	"github.com/guanfantech/SubGameCenterService/config"
	"github.com/guanfantech/SubGameCenterService/internal/gin/middleware"
	frontSwap "github.com/guanfantech/SubGameCenterService/internal/gin/handler/front/swap"
	frontGuessHash "github.com/guanfantech/SubGameCenterService/internal/gin/handler/front/guessHash"
	frontWebsocket "github.com/guanfantech/SubGameCenterService/internal/gin/handler/front/websocket"
	frontMarquee "github.com/guanfantech/SubGameCenterService/internal/gin/handler/front/marquee"
)

func SetupRouter(config *config.Config) *gin.Engine {
	if config.Gin.Mode == "RELEASE" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.Default()
	r.Use(middleware.InitLogger)

	r.Static("/api/assets", "./assets")

	api := r.Group("/api")
	{
		frontV1 := api.Group("/v1")
		{
			swap := frontV1.Group("/swap")
			{
				swap.GET("/details/:address", frontSwap.Details)
			}

			guessHash := frontV1.Group("/guess-hash")
			{
				guessHash.GET("/game-center", frontGuessHash.GameCenter)
				guessHash.GET("/game-info/:room", frontGuessHash.GameInfo)
				guessHash.GET("/history/bookmaker", frontGuessHash.HistoryBookmaker)
				guessHash.GET("/history/player", frontGuessHash.HistoryPlayer)
				guessHash.GET("/history/details/:room", frontGuessHash.HistoryDetails)
			}

			frontV1.GET("/marquee", frontMarquee.Marquee)
		}
	}

	ws := r.Group("/websocket")
	{
		wsv1 := ws.Group("/v1")
		{
			wsv1.GET("/test", frontWebsocket.TestHtml)
			wsv1.GET("/echo", frontWebsocket.Echo)
		}
	}

	return r
}
