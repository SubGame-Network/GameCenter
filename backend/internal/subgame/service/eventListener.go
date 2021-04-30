package service

import (
	"github.com/centrifuge/go-substrate-rpc-client/v2/types"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/pkg/errors"
	"go.uber.org/zap"
	"time"
	"fmt"
)

const NoHashError = "no hash"

func (svc *subgameService) EventListener() error {
	fmt.Println("=== Event Listen Start ===")

	if svc.subgameApi == nil {
		return nil
	}

	var blockNum uint64 = 0
	var runCount int64 = 0

	blockLog, _ := svc.repo.GetLastBlockLog()
	if blockLog != nil {
		blockNum = blockLog.Num
		if blockLog.Done == true {
			blockNum++
		}
	}

	if blockLog == nil {
		headerLatest, err := svc.subgameApi.RPC.Chain.GetHeaderLatest()
		if err != nil {
			return errors.WithStack(err)
		}
		blockNum = uint64(headerLatest.Number)
	}

	for ; true; <-time.Tick(1 * time.Second) {
		if runCount > 10000 {
			delErr := svc.repo.DeleteOldBlock(blockNum)
			if delErr != nil {
				zap.S().Warn("DeleteOldBlock Error: %v", delErr)
			}
			if delErr == nil {
				runCount = 0
			}
		}

		err := svc.EventRunner(blockNum)
		if err != nil {
			switch err.Error() {
			case NoHashError:
				continue
			default:
				return errors.WithStack(err)
			}
		}

		if err == nil {
			blockNum++
			runCount++
		}
	}

	return nil
}

func (svc *subgameService) FixBlockGap() {
	fmt.Println("=== Event Fix Start ===")
	for ; true; <-time.Tick(60 * time.Second) {
		logs, err := svc.repo.GetBlockGapLog()
		if err != nil {
			continue
		}

		for _, val := range logs {
			blockNum := val.Num
			svc.EventRunner(blockNum)
		}
	}
}

func (svc *subgameService) EventRunner(blockNum uint64) error {
	typeHash, err := svc.subgameApi.RPC.Chain.GetBlockHash(blockNum)
	if err != nil {
		return fmt.Errorf(NoHashError)
	}

	hashMeta, err := svc.subgameApi.RPC.State.GetMetadata(typeHash)
	if err != nil {
		return errors.WithStack(err)
	}

	key, err := types.CreateStorageKey(hashMeta, "System", "Events", nil, nil)
	if err != nil {
		return errors.WithStack(err)
	}

	sub, err := svc.subgameApi.RPC.State.QueryStorage([]types.StorageKey{key}, typeHash, typeHash)
	if err != nil {
		return errors.WithStack(err)
	}

	for _, set := range sub {
		for _, chng := range set.Changes {
			// skip, we are only interested in events with countent
			if !types.Eq(chng.StorageKey, key) || !chng.HasStorageData {
				continue
			}

			// Decode the event records
			events := domain.SubGameEventRecords{}
			err = types.EventRecordsRaw(chng.StorageData).DecodeEventRecords(hashMeta, &events)
			if err != nil {
				continue
			}

			blockHash := set.Block.Hex()

			// txHash已存在tx_record資料表就略過
			if svc.repo.ExistedTxRecordByHash(blockHash) == true {
				continue
			}

			for _, e := range events.Chips_BuyChips {
				err := svc.EventChipsBuyChips(blockHash, e)
				if err != nil {
					return err
				}
			}

			for _, e := range events.Chips_Redemption {
				err := svc.EventChipsRedemption(blockHash, e)
				if err != nil {
					return err
				}
			}

			for _, e := range events.GameGuessHashModule_CreateGame {
				err := svc.EventGuessHashCreateGame(blockHash, e)
				if err != nil {
					return err
				}
			}

			for _, e := range events.GameGuessHashModule_Bet {
				err := svc.EventGuessHashBet(blockHash, e)
				if err != nil {
					return err
				}
			}

			for _, e := range events.GameGuessHashModule_BettorResult {
				err := svc.EventGuessHashBettorResult(blockHash, e)
				if err != nil {
					return err
				}
			}

			for _, e := range events.GameGuessHashModule_GameOver {
				err := svc.EventGuessHashGameOver(blockHash, e)
				if err != nil {
					return err
				}
			}
		}
	}

	inputBlockLog := &domain.BlockLog{
		Num: blockNum,
		Done: true,
	}
	svc.repo.InsertUpdateBlockLog(inputBlockLog)

	return nil
}