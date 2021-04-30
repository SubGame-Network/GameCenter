package gorm

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	gormModel "github.com/guanfantech/SubGameCenterService/internal/subgame/model/gorm"
	"gorm.io/gorm"
	"time"
)

func (repo *subGameRepository) UserTxRecords(pubkey string, from, to time.Time) ([]*domain.TxRecord, error) {
	var model []*gormModel.TxRecord

	sql := repo.db.Where("user_pubkey = ?", pubkey)

	if !from.IsZero() && !to.IsZero() {
		sql = sql.Where("created_at >= ?", from.Format(time.RFC3339)).
				Where("created_at <= ?", to.Format(time.RFC3339))
	}

	err := sql.
		Order("id DESC").
		Find(&model).Error
	if err != nil {
		return nil, err
	}

	output := []*domain.TxRecord{}
	for _, val := range model {
		d := gormModel.TxRecordModelToDomain(val)
		output = append(output, d)
	}
	return output, nil
}

func (repo *subGameRepository) InsertTxRecord(input *domain.TxRecord) error {
	m := gormModel.TxRecordDomainToModel(input)
	err := repo.db.Create(&m).Error
	return err
}

func (repo *subGameRepository) ExistedTxRecordByHash(hash string) bool {
	var m gormModel.TxRecord
	err := repo.db.Where("tx_hash = ?", hash).First(&m).Error
	if err == gorm.ErrRecordNotFound {
		return false
	}
	return true
}
