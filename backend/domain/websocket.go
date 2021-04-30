package domain

import (
	"github.com/gorilla/websocket"
	"net/http"
)

var Upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

const (
	WsTypeMarquee             string = "marquee"
	WsTypeGuessHashCreateGame string = "guessHashCreateGame"
	WsTypeGuessHashBet        string = "guessHashBet"
)

type MarqueeResponse struct {
	Type    string `json:"type"`
	Room    string `json:"room"`
	Address string `json:"address"`
	SGP     string `json:"SGP"`
}