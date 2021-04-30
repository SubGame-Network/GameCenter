package config

import (
	"log"

	"os"
	"strings"

	"github.com/spf13/viper"
)

type Config struct {
	Gin     *GinConfig
	DB      *DBConfig
	SubGame *SubGame
}

type GinConfig struct {
	Host string
	Port string
	Mode string
}

type DBConfig struct {
	Dialect  string
	User     string
	Password string
	Host     string
	Port     string
	Database string
	Flag     string
}

type SubGame struct {
	RPC string
}

func NewConfig() *Config {
	configPath := "./"
	runPath, _ := os.Getwd()
	matchPathStatus := false
	pathArr := strings.Split(runPath, "/")
	for i := len(pathArr) - 1; i > 0; i-- {
		configPath += "../"
		if pathArr[i] == "cmd" || pathArr[i] == "test" || pathArr[i] == "migration" {
			matchPathStatus = true
			break
		}
	}
	if !matchPathStatus {
		configPath = "./"
	}
	configPath += "config"

	viper.SetConfigName("config")
	viper.AddConfigPath(configPath)
	viper.WatchConfig()
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatal(err)
	}
	return &Config{
		Gin: &GinConfig{
			Host: viper.GetString("server.host"),
			Port: viper.GetString("server.port"),
			Mode: viper.GetString("server.mode"),
		},
		DB: &DBConfig{
			Dialect:  viper.GetString("db.dialect"),
			User:     viper.GetString("db.user"),
			Password: viper.GetString("db.password"),
			Host:     viper.GetString("db.host"),
			Port:     viper.GetString("db.port"),
			Database: viper.GetString("db.database"),
			Flag:     viper.GetString("db.flag"),
		},
		SubGame: &SubGame{
			RPC: viper.GetString("subgame.rpc"),
		},
	}
}
