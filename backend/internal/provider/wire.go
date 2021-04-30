//+build wireinject

package provider

import (
	"log"
	"sync"

	"github.com/google/wire"
	"github.com/guanfantech/SubGameCenterService/config"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/database"
	"gorm.io/gorm"

	adminRepo "github.com/guanfantech/SubGameCenterService/internal/adminAccount/repository/gorm"
	subgameSvc "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
	subgameRepo "github.com/guanfantech/SubGameCenterService/internal/subgame/repository/gorm"
)

var db *gorm.DB
var dbOnce sync.Once

func NewDB() (*gorm.DB, error) {
	var err error
	if db == nil {
		dbOnce.Do(func() {
			log.Println("connect db")
			db, err = database.DatabaseConnection(NewConfig().DB)
			if err != nil {
				return
			}
			log.Println("connect db success")
		})
	}
	return db, err
}

var cg *config.Config
var configOnce sync.Once

func NewConfig() *config.Config {
	configOnce.Do(func() {
		log.Println("read config")
		cg = config.NewConfig()
		log.Println("read config success")
	})
	return cg
}

func NewAdminRepo() (domain.AdminRepository, error) {
	panic(wire.Build(adminRepo.NewAdminRepository, NewDB))
}

func NewSubGameRepo() (domain.SubGameRepository, error) {
	panic(wire.Build(subgameRepo.NewSubGameRepository, NewDB))
}
func NewSubGameService() (domain.SubGameService, error) {
	panic(wire.Build(subgameSvc.NewSubGame, NewConfig, NewSubGameRepo))
}
