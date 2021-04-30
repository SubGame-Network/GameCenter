package gorm

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"gorm.io/gorm"
)

type subGameRepository struct {
	db *gorm.DB
}

func NewSubGameRepository(db *gorm.DB) domain.SubGameRepository {
	return &subGameRepository{
		db: db,
	}
}
