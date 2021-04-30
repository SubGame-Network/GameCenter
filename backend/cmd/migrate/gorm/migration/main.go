package main

import (
	"fmt"
	"log"
	"os"

	"github.com/guanfantech/SubGameCenterService/internal/provider"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"

	admin "github.com/guanfantech/SubGameCenterService/internal/adminAccount/repository/gorm"
	subgame "github.com/guanfantech/SubGameCenterService/internal/subgame/model/gorm"
	"gorm.io/gorm/logger"
)

func main() {
	config := provider.NewConfig()

	connection := fmt.Sprintf("%s:%s@tcp(%s:%s)/?parseTime=true", config.DB.User, config.DB.Password, config.DB.Host, config.DB.Port)
	db, err := gorm.Open(mysql.New(mysql.Config{
		DSN: connection,
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
		Logger: logger.Default.LogMode(logger.Silent),
	})

	if err != nil {
		log.Fatal(err)
	}

	if len(os.Args) >= 2 {
		if arg := os.Args[1]; arg == "--reset" {
			db.Exec("DROP DATABASE " + config.DB.Database)
		}
	}

	db.Exec("CREATE DATABASE IF NOT EXISTS " + config.DB.Database + " CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")

	connection = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", config.DB.User, config.DB.Password, config.DB.Host, config.DB.Port, config.DB.Database)
	db, err = gorm.Open(mysql.New(mysql.Config{
		DSN: connection,
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})
	db.AutoMigrate(&admin.Admin{})
	db.AutoMigrate(&subgame.TxRecord{})
	db.AutoMigrate(&subgame.GuessHashRoom{})
	db.AutoMigrate(&subgame.GuessHashBet{})
	db.AutoMigrate(&subgame.BlockLog{})
}
