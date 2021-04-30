package domain

import (
	"github.com/centrifuge/go-substrate-rpc-client/v2/types"
)

type SubGameEventGuessHash struct {
	GameGuessHashModule_CreateGame   []GameGuessHashModule_CreateGame
	GameGuessHashModule_Bet          []GameGuessHashModule_Bet
	GameGuessHashModule_BettorResult []GameGuessHashModule_BettorResult
	GameGuessHashModule_GameOver     []GameGuessHashModule_GameOver
}

type GameGuessHashModule_CreateGame struct {
	Phase    types.Phase
	From     types.AccountID
	GameId   types.U32
	Value    types.U128
	BlockNum types.U32
	Topics   []types.Hash
}

type GameGuessHashModule_Bet struct {
	Phase    types.Phase
	From     types.AccountID
	GameId   types.U32
	Value    types.U128
	GameMode types.U8
	BetId    types.U32
	Topics   []types.Hash
}

type GameGuessHashModule_BettorResult struct {
	Phase     types.Phase
	From      types.AccountID
	GameId    types.U32
	Value     types.U128
	BetId     types.U32
	OddEven   types.U8
	BlockHash types.Hash
	Topics    []types.Hash
}

type GameGuessHashModule_GameOver struct {
	Phase     types.Phase
	From      types.AccountID
	GameId    types.U32
	Value     types.U128
	OddEven   types.U8
	BlockHash types.Hash
	Topics    []types.Hash
}
