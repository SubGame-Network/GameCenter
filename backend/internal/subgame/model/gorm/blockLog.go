package gorm

import (
	"gorm.io/gorm"
	"github.com/guanfantech/SubGameCenterService/domain"
)

type BlockLog struct {
	gorm.Model
	Num  uint64 `gorm:"uniqueIndex:block_num; not null"`
	Done bool   `gorm:"type:boolean; not null"`
}

func BlockLogModelToDomain(input *BlockLog) *domain.BlockLog {
	return &domain.BlockLog{
		Num:  input.Num,
		Done: input.Done,
	}
}

func BlockLogDomainToModel(input *domain.BlockLog) *BlockLog {
	return &BlockLog{
		Num:  input.Num,
		Done: input.Done,
	}
}
