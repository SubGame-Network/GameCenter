package gorm

import (
	"gorm.io/gorm/clause"
	gormModel "github.com/guanfantech/SubGameCenterService/internal/subgame/model/gorm"
	"time"
	"github.com/guanfantech/SubGameCenterService/domain"
	"gorm.io/gorm"
	subgameSvcHelper "github.com/guanfantech/SubGameCenterService/internal/subgame/service"
)

func (repo *subGameRepository) InsertUpdateGuessHashBet(input *domain.GuessHashBet) {
	m := gormModel.GuessHashBetDomainToModel(input)
	repo.db.Clauses(clause.OnConflict{
		Columns:   []clause.Column{
			{Table: "guess_hash_bet", Name: "game_id"},
			{Table: "guess_hash_bet", Name: "game_plat"},
			{Table: "guess_hash_bet", Name: "bet_id"},
		},
		DoUpdates: clause.Assignments(map[string]interface{}{
			"status":         m.Status,
			"done_at":        m.DoneAt,
			"result_draw":    m.ResultDraw,
			"result_tx_hash": m.ResultTxHash,
			"result_done_at": m.ResultDoneAt,
			"updated_at":     time.Now().Format(time.RFC3339),
		}),
	}).Create(&m)
}

func (repo *subGameRepository) GetGuessHashBet(GameId, BetId string) (*domain.GuessHashBet, error) {
	m := gormModel.GuessHashBet{}
	err := repo.db.Where("game_plat = ?", domain.GamePlatGuessHash).
		Where("game_id = ?", GameId).
		Where("bet_id = ?", BetId).
		First(&m).Error
	if err == gorm.ErrRecordNotFound {
		return nil, nil
	}

	output := gormModel.GuessHashBetModelToDomain(&m)

	return output, nil
}

func (repo *subGameRepository) UpdateGuessHashBetLoser(gameId, blockHash string, doneAt *time.Time) error {
	err := repo.db.Exec(`UPDATE guess_hash_bet SET
		status = ?, 
		result_draw = 0 - stake, 
		result_tx_hash = ?,
		result_done_at = ? 
		WHERE game_plat = ? AND game_id = ? AND status = ?`,
		string(domain.GuessHashRoomStatusOver),
		blockHash,
		doneAt,
		domain.GamePlatGuessHash,
		gameId,
		domain.GuessHashRoomStatusStart).Error

	return err
}

func (repo *subGameRepository) GetGuessHashRommAllBet(gameId string) ([]*domain.GuessHashBet, error) {
	m := []*gormModel.GuessHashBet{}
	err := repo.db.Where("game_plat = ?", domain.GamePlatGuessHash).
		Where("game_id = ?", gameId).
		Order("id DESC").
		Find(&m).Error
	if err != nil {
		return nil, err
	}

	output := []*domain.GuessHashBet{}
	for _, val := range m {
		output = append(output, gormModel.GuessHashBetModelToDomain(val))
	}
	return output, nil
}

func (repo *subGameRepository) GroupGuessHashGameBets() ([]*domain.GroupGuessHashGameBets, error) {
	m := gormModel.GuessHashBet{}
	row := []*domain.GroupGuessHashGameBets{}
	err := repo.db.
		Model(&m).
		Select("game_plat, game_id, SUM(stake) AS total_bet").
		Where("game_plat = ?", domain.GamePlatGuessHash).
		Group("game_id").
		Find(&row).Error
	if err != nil {
		return nil, err
	}

	for _, val := range row {
		val.TotalBet = subgameSvcHelper.DotToUnit(val.TotalBet)
	}

	return row, nil
}

func (repo *subGameRepository) GuessHashHistoryPlayerBets(from, to time.Time) ([]*domain.GuessHashHistoryPlayerBets, error) {
	row := []*domain.GuessHashHistoryPlayerBets{}
	sql := repo.db.
		Table("guess_hash_bet AS bet").
		Select("bet.*, room.guess_block_height, room.pool, room.guess_block_odd_even").
		Joins("LEFT JOIN guess_hash_room AS room ON room.game_plat = bet.game_plat AND room.game_id = bet.game_id").
		Where("bet.game_plat = ?", domain.GamePlatGuessHash)

	if !from.IsZero() && !to.IsZero() {
		sql = sql.Where("bet.created_at >= ?", from.Format(time.RFC3339)).
			Where("bet.created_at <= ?", to.Format(time.RFC3339))
	}

	err := sql.Order("id DESC").Find(&row).Error
	if err != nil {
		return nil, err
	}

	for _, val := range row {
		val.Stake      = subgameSvcHelper.DotToUnit(val.Stake)
		val.ResultDraw = subgameSvcHelper.DotToUnit(val.ResultDraw)
		val.Pool       = subgameSvcHelper.DotToUnit(val.Pool)
	}

	return row, nil
}

func (repo *subGameRepository) GuessHashWinnerMarquee() ([]*domain.GuessHashBet, error) {
	m := []*gormModel.GuessHashBet{}
	err := repo.db.Where("game_plat = ?", domain.GamePlatGuessHash).
		Where("result_draw > 0").
		Order("id DESC").
		Limit(10).
		Find(&m).Error
	if err != nil {
		return nil, err
	}

	output := []*domain.GuessHashBet{}
	for _, val := range m {
		output = append(output, gormModel.GuessHashBetModelToDomain(val))
	}
	return output, nil
}