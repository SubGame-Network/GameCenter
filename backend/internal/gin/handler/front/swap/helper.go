package swap

import (
	"github.com/guanfantech/SubGameCenterService/domain"
	"time"
)

type TxRecordResponse struct {
	GamePlat        string `json:"type"`
	UserAddress     string `json:"address"`
	SGBalanceChange string `json:"SGBChange"`
	SGPoint         string `json:"SGPBalance"`
	SGPointChange   string `json:"SGPChange"`
	TxHash          string `json:"txHash"`
	Timestamp       string `json:"timestamp"`
}

func DomainToResponse(input *domain.TxRecord) TxRecordResponse {
	gamePlat := "-"
	if platStr, ok := domain.GamePlatMap[input.GamePlat]; ok {
		gamePlat = platStr
	}

	SGBalanceChange := "-"
	if !input.SGBalanceChange.IsZero() {
		SGBalanceChange = input.SGBalanceChange.String()
	}

	SGPoint := "0"
	if !input.SGPoint.IsZero() {
		SGPoint = input.SGPoint.String()
	}

	SGPointChange := "-"
	if !input.SGPointChange.IsZero() {
		SGPointChange = input.SGPointChange.String()
	}

	timestamp := "-"
	if !input.CreatedAt.IsZero() {
		timestamp = input.CreatedAt.Format(time.RFC3339)
	}

	output := TxRecordResponse{
		GamePlat:        gamePlat,
		UserAddress:     input.UserAddress,
		SGBalanceChange: SGBalanceChange,
		SGPoint:         SGPoint,
		SGPointChange:   SGPointChange,
		TxHash:          input.TxHash,
		Timestamp:       timestamp,
	}
	return output
}
