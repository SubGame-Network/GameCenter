// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//+build !wireinject

package provider

import (
	"github.com/guanfantech/SubGameCenterService/config"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/adminAccount/repository/gorm"
	"github.com/guanfantech/SubGameCenterService/internal/database"
	gorm2 "github.com/guanfantech/SubGameCenterService/internal/subgame/repository/gorm"
	"github.com/guanfantech/SubGameCenterService/internal/subgame/service"
	gorm3 "gorm.io/gorm"
	"log"
	"sync"
)

// Injectors from wire.go:

func NewAdminRepo() (domain.AdminRepository, error) {
	gormDB, err := NewDB()
	if err != nil {
		return nil, err
	}
	adminRepository := gorm.NewAdminRepository(gormDB)
	return adminRepository, nil
}

func NewSubGameRepo() (domain.SubGameRepository, error) {
	gormDB, err := NewDB()
	if err != nil {
		return nil, err
	}
	subGameRepository := gorm2.NewSubGameRepository(gormDB)
	return subGameRepository, nil
}

func NewSubGameService() (domain.SubGameService, error) {
	config := NewConfig()
	subGameRepository, err := NewSubGameRepo()
	if err != nil {
		return nil, err
	}
	subGameService, err := service.NewSubGame(config, subGameRepository)
	if err != nil {
		return nil, err
	}
	return subGameService, nil
}

// wire.go:

var db *gorm3.DB

var dbOnce sync.Once

func NewDB() (*gorm3.DB, error) {
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
