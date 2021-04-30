package domain

import (
	"github.com/centrifuge/go-substrate-rpc-client/v2/types"
	"time"
	"github.com/shopspring/decimal"
)

type BlockLog struct {
	Num  uint64
	Done bool
}

type SubGameEventRecords struct {
	types.EventRecords
	SubGameEventChips
	SubGameEventGuessHash
}

type GamePlatType string
const (
	GamePlatSwap      GamePlatType = "1"
	GamePlatGuessHash GamePlatType = "2"
)
var GamePlatMap = map[GamePlatType]string{
	GamePlatSwap:      "Swap",
	GamePlatGuessHash: "GuessHash",
}

type TxRecord struct {
	ID              uint64
	GamePlat        GamePlatType
	UserPubkey      string
	UserAddress     string
	SGBalanceChange decimal.Decimal
	SGPoint         decimal.Decimal
	SGPointChange   decimal.Decimal
	TxHash          string
	DoneAt          *time.Time
	UpdatedAt       time.Time
	CreatedAt       time.Time
}

type GuessHashRoomStatusType string
const (
	GuessHashRoomStatusStart GuessHashRoomStatusType = "1"
	GuessHashRoomStatusOver GuessHashRoomStatusType = "2"
)
type GuessHashRoom struct {
	ID                uint64
	GamePlat          GamePlatType
	GameId            string
	GuessBlockHeight  string
	GuessBlockHash    string
	GuessBlockOddEven string
	UserPubkey        string
	UserAddress       string
	Status            GuessHashRoomStatusType
	Pool              decimal.Decimal
	TxHash            string
	DoneAt            *time.Time
	ResultPool        decimal.Decimal
	ResultTxHash      string
	ResultDoneAt      *time.Time
	UpdatedAt         time.Time
	CreatedAt         time.Time
}

var GuessHashGameMode = map[uint8]string{
	1: "Odd",
	2: "Even",
}
type GuessHashBet struct {
	ID           uint64
	GamePlat     GamePlatType
	GameId       string
	BetId        string
	UserPubkey   string
	UserAddress  string
	Status       GuessHashRoomStatusType
	Stake        decimal.Decimal
	OddEven      string
	TxHash       string
	DoneAt       *time.Time
	ResultDraw   decimal.Decimal
	ResultTxHash string
	ResultDoneAt *time.Time
	UpdatedAt    time.Time
	CreatedAt    time.Time
}
type GroupGuessHashGameBets struct {
	GamePlat GamePlatType
	GameId   string
	TotalBet decimal.Decimal
}
type GuessHashHistoryPlayerBets struct {
	GuessHashBet
	GuessBlockHeight  string
	TotalBet          decimal.Decimal // 另外加總
	Pool              decimal.Decimal
	GuessBlockOddEven string
}

const WebsocketMarqueeQueueKey string = "SubGameMarquee"

type SubGameService interface {
	EventListener() error
	GetBlockHashSGPoint(blockHash, pubkey string) (decimal.Decimal, error)
	FixBlockGap()
}

type SubGameRepository interface {
	UserTxRecords(pubkey string, from, to time.Time) ([]*TxRecord, error)
	InsertTxRecord(input *TxRecord) error
	InsertUpdateGuessHashRoom(input *GuessHashRoom)
	InsertUpdateGuessHashBet(input *GuessHashBet)
	GetGuessHashBet(GameId, BetId string) (*GuessHashBet, error)
	GetGuessHashRoom(GameId string) (*GuessHashRoom, error)
	UpdateGuessHashBetLoser(GameId, blockHash string, doneAt *time.Time) error
	GetLastBlockLog() (*BlockLog, error)
	InsertUpdateBlockLog(input *BlockLog)
	DeleteOldBlock(maxBlockNum uint64) error
	ExistedTxRecordByHash(hash string) bool
	AllGuessHashRoom(from, to time.Time) ([]*GuessHashRoom, error)
	GetGuessHashRommAllBet(GameId string) ([]*GuessHashBet, error)
	GroupGuessHashGameBets() ([]*GroupGuessHashGameBets, error)
	GuessHashHistoryPlayerBets(from, to time.Time) ([]*GuessHashHistoryPlayerBets, error)
	GuessHashWinnerMarquee() ([]*GuessHashBet, error)
	GetBlockGapLog() ([]*BlockLog, error)
}