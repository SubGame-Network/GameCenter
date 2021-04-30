package database

import (
	"fmt"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"github.com/guanfantech/SubGameCenterService/config"
	"gorm.io/gorm/logger"
)

func DatabaseConnection(config *config.DBConfig) (*gorm.DB, error) {
	url := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?%s",
		config.User,
		config.Password,
		config.Host,
		config.Port,
		config.Database,
		config.Flag,
	)

	// gorm
	var db *gorm.DB
	var err error
	if config.Dialect == "mysql" {
		db, err = gorm.Open(mysql.New(mysql.Config{
			DSN: url,
		}), &gorm.Config{
			AllowGlobalUpdate: false,
			NamingStrategy: schema.NamingStrategy{
				SingularTable: true,
			},
			Logger: logger.Default.LogMode(logger.Silent),
		})
	}
	if err != nil {
		return nil, err
	}
	if db == nil {
		return nil, fmt.Errorf("dialect not implement")
	}

	// setup conn
	sqlDB, err := db.DB()
	if err != nil {
		return nil, err
	}
	sqlDB.SetConnMaxLifetime(time.Duration(120) * time.Second)
	sqlDB.SetMaxIdleConns(100)
	sqlDB.SetMaxOpenConns(100)

	return db, nil
}
