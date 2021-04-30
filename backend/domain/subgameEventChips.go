package domain

import "github.com/centrifuge/go-substrate-rpc-client/v2/types"

type SubGameEventChips struct {
	Chips_BuyChips           []Chips_BuyChips
	Chips_Redemption         []Chips_Redemption
	Chips_Reserve            []Chips_Reserve
	Chips_Unreserve          []Chips_Unreserve
	Chips_RepatriateReserved []Chips_RepatriateReserved
}

type Chips_BuyChips struct {
	Phase  types.Phase
	From   types.AccountID
	Value  types.U128
	Topics []types.Hash
}

type Chips_Redemption struct {
	Phase  types.Phase
	From   types.AccountID
	Value  types.U128
	Topics []types.Hash
}

type Chips_Reserve struct {
	Phase  types.Phase
	From   types.AccountID
	Value  types.U128
	Topics []types.Hash
}

type Chips_Unreserve struct {
	Phase  types.Phase
	From   types.AccountID
	Value  types.U128
	Topics []types.Hash
}

type Chips_RepatriateReserved struct {
	Phase  types.Phase
	From   types.AccountID
	To     types.AccountID
	Value  types.U128
	Topics []types.Hash
}
