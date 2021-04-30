package gorm

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"gorm.io/gorm/clause"
	"gorm.io/gorm"
	gormModel "github.com/guanfantech/SubGameCenterService/internal/subgame/model/gorm"
	"time"
)

func (repo *subGameRepository) GetLastBlockLog() (*domain.BlockLog, error) {
	var m gormModel.BlockLog
	err := repo.db.Last(&m).Error
	if err == gorm.ErrRecordNotFound {
		return nil, nil
	}

	output := gormModel.BlockLogModelToDomain(&m)

	return output, nil
}

func (repo *subGameRepository) InsertUpdateBlockLog(input *domain.BlockLog) {
	m := gormModel.BlockLogDomainToModel(input)
	repo.db.Clauses(clause.OnConflict{
		Columns:   []clause.Column{
			{Table: "block_log", Name: "num"},
		},
		DoUpdates: clause.Assignments(map[string]interface{}{
			"done":       m.Done,
			"updated_at": time.Now().Format(time.RFC3339),
		}),
	}).Create(&m)
}

func (repo *subGameRepository) DeleteOldBlock(maxBlockNum uint64) error {
	return repo.db.
		Where("num < ?", maxBlockNum).
		Where("done = ?", 1).
		Delete(&gormModel.BlockLog{}).
		Error
}

func (repo *subGameRepository) GetBlockGapLog() ([]*domain.BlockLog, error) {
	var m []*gormModel.BlockLog
	err := repo.db.
		Where("done = ?", 0).
		Order("num ASC").
		Find(&m).Error
	if err != nil {
		return nil, err
	}
	if m == nil {
		return nil, nil
	}

	output := []*domain.BlockLog{}
	for _, val := range m {
		output = append(output, gormModel.BlockLogModelToDomain(val))
	}
	return output, nil
}
