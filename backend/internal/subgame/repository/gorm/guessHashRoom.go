package gorm

import (
	"gorm.io/gorm/clause"
	gormModel "github.com/guanfantech/SubGameCenterService/internal/subgame/model/gorm"
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"gorm.io/gorm"
)

func (repo *subGameRepository) InsertUpdateGuessHashRoom(input *domain.GuessHashRoom) {
	m := gormModel.GuessHashRoomDomainToModel(input)
	repo.db.Clauses(clause.OnConflict{
		Columns:   []clause.Column{
			{Table: "guess_hash_room", Name: "game_id"},
			{Table: "guess_hash_room", Name: "game_plat"},
		},
		DoUpdates: clause.Assignments(map[string]interface{}{
			"status":               m.Status,
			"done_at":              m.DoneAt,
			"guess_block_hash":     m.GuessBlockHash,
			"guess_block_odd_even": m.GuessBlockOddEven,
			"result_pool":          m.ResultPool,
			"result_tx_hash":       m.ResultTxHash,
			"result_done_at":       m.ResultDoneAt,
			"updated_at":           time.Now().Format(time.RFC3339),
		}),
	}).Create(&m)
}

func (repo *subGameRepository) GetGuessHashRoom(GameId string) (*domain.GuessHashRoom, error) {
	m := gormModel.GuessHashRoom{}
	err := repo.db.Where("game_plat = ?", domain.GamePlatGuessHash).
		Where("game_id = ?", GameId).
		First(&m).Error
	if err == gorm.ErrRecordNotFound {
		return nil, nil
	}

	output := gormModel.GuessHashRoomModelToDomain(&m)

	return output, nil
}

func (repo *subGameRepository) AllGuessHashRoom(from, to time.Time) ([]*domain.GuessHashRoom, error) {
	m := []*gormModel.GuessHashRoom{}

	sql := repo.db.Where("game_plat = ?", domain.GamePlatGuessHash)
	if !from.IsZero() && !to.IsZero() {
		sql = sql.Where("created_at >= ?", from.Format(time.RFC3339)).
			Where("created_at <= ?", to.Format(time.RFC3339))
	}

	err := sql.Order("id DESC").Find(&m).Error
	if err != nil {
		return nil, err
	}

	output := []*domain.GuessHashRoom{}
	for _, val := range m {
		output = append(output, gormModel.GuessHashRoomModelToDomain(val))
	}

	return output, nil
}