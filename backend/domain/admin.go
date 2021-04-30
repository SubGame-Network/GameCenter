package domain

import (
	"time"

	uuid "github.com/satori/go.uuid"
)

type Admin struct {
	UUID      uuid.UUID
	Account   string
	Password  string
	Status    int
	Name      string
	GroupUUID string
	Email     string
	UpdatedAt time.Time
	CreatedAt time.Time
}

type AdminRepository interface {
	GetUserByAccount(account string) (*Admin, error)
	GetUserByUUID(UUID uuid.UUID) (*Admin, error)
	UpdatePasswordByUUID(UUID uuid.UUID, password string) error
	ListAll() ([]*Admin, error)
}
