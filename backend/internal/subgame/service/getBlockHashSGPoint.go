package service

import (
	"github.com/shopspring/decimal"
	"github.com/centrifuge/go-substrate-rpc-client/v2/types"
	"github.com/pkg/errors"
)

// 這個blockHash的玩家目前有多少遊戲代幣
func (svc *subgameService) GetBlockHashSGPoint(blockHash, pubkey string) (decimal.Decimal, error) {
	var SGPoint decimal.Decimal

	typeHash, _ := types.NewHashFromHexString(blockHash)
	hashMeta, err := svc.subgameApi.RPC.State.GetMetadata(typeHash)
	if err != nil {
		return SGPoint, errors.WithStack(err)
	}

	typesAddr, _ := types.HexDecodeString(pubkey)

	chipsMapKey, err := types.CreateStorageKey(hashMeta, "Chips", "ChipsMap", typesAddr, nil)
	if err != nil {
		return SGPoint, errors.WithStack(err)
	}

	storageChangeSet, err := svc.subgameApi.RPC.State.QueryStorage([]types.StorageKey{chipsMapKey}, typeHash, typeHash)
	if err != nil {
		return SGPoint, errors.WithStack(err)
	}

	storageData := storageChangeSet[0].Changes[0].StorageData

	var point types.U128
	types.DecodeFromBytes(storageData, &point)
	SGPoint, err = decimal.NewFromString(point.String())
	if err != nil {
		return SGPoint, errors.WithStack(err)
	}

	return SGPoint, nil
}
