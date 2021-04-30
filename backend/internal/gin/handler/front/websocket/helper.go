package websocket

import (
	"github.com/gorilla/websocket"
	"encoding/json"
	"go.uber.org/zap"
)

var WsPool = make(map[*websocket.Conn]string)

func WsMarqueeClose(ws *websocket.Conn) {
	delete(WsPool, ws)
	ws.Close()
}

type WsJsonResponse struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
}
func WebsocketWriteMessage(dataType string, data interface{}) error {
	text, err := json.Marshal(WsJsonResponse{
		Type: dataType,
		Data: data,
	})
	if err != nil {
		return err
	}

	zap.S().Infow("new websocket", "text", string(text))

	for ws, _ := range WsPool {
		err := ws.WriteMessage(websocket.TextMessage, []byte(text))
		if err != nil {
			zap.S().Warn(err)
			return err
		}
	}

	return nil
}
