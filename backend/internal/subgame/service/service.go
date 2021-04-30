package service

import (
	"github.com/guanfantech/SubGameCenterService/config"
	"github.com/guanfantech/SubGameCenterService/domain"
	"sync"
	gsrpc "github.com/centrifuge/go-substrate-rpc-client/v2"
)

type subgameService struct {
	config     *config.Config
	subgameApi *gsrpc.SubstrateAPI
	repo       domain.SubGameRepository
}

var subgameOnce sync.Once
var subgameApi *gsrpc.SubstrateAPI

func NewSubGame(config *config.Config, repo domain.SubGameRepository) (domain.SubGameService, error) {
	var err error
	if subgameApi == nil {
		subgameOnce.Do(func() {
			subgameApi, err = gsrpc.NewSubstrateAPI(config.SubGame.RPC)
		})
	}

	return &subgameService{
		config:     config,
		subgameApi: subgameApi,
		repo:       repo,
	}, err
}
