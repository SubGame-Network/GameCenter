package gorm

import (
	"errors"

	uuid "github.com/satori/go.uuid"
	"gorm.io/gorm"
	"github.com/guanfantech/SubGameCenterService/domain"
)

type adminRepository struct {
	db *gorm.DB
}

func NewAdminRepository(db *gorm.DB) domain.AdminRepository {
	return &adminRepository{
		db: db,
	}
}

func (repo *adminRepository) ListAll() ([]*domain.Admin, error) {
	var model []*domain.Admin
	err := repo.db.Model(&Admin{}).Find(&model).Error
	if err != nil {
		return nil, err
	}

	return model, nil
}

func (repo *adminRepository) GetUserByAccount(account string) (*domain.Admin, error) {
	var admin domain.Admin
	err := repo.db.Where("account = ?", account).First(&admin).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &admin, nil
}

func (repo *adminRepository) GetUserByUUID(UUID uuid.UUID) (*domain.Admin, error) {
	var admin domain.Admin
	err := repo.db.Where("uuid = ?", UUID).First(&admin).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	return &admin, nil
}

func (repo *adminRepository) UpdatePasswordByUUID(UUID uuid.UUID, password string) error {
	var model Admin
	return repo.db.Model(&model).
		Where("uuid = ?", UUID).
		Update("password", password).Error
}
