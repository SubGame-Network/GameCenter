package service

import (
	"fmt"
	"github.com/centrifuge/go-substrate-rpc-client/v2/types"
	"github.com/centrifuge/go-substrate-rpc-client/v2/hash"
	"github.com/btcsuite/btcutil/base58"
	"strings"
	"github.com/shopspring/decimal"
)

func TypesAccountIDToPubkey(input types.AccountID) (string, error) {
	pubkey := fmt.Sprintf("%x", input[:])
	if len(pubkey) != 64 {
		return "", fmt.Errorf("not pubkey: %s", pubkey)
	}
	return "0x" + pubkey, nil
}

func PubkeyToGenericAddress(pubkey string) (string, error) {
	pubkey = strings.Replace(pubkey, "0x", "", 1)
	var addr string = ""
	addressType := "2a"
	contextPrefix := []byte("SS58PRE")
	noSum := types.MustHexDecodeString(addressType + pubkey)
	all := append(contextPrefix, noSum...)
	checksum, err := hash.NewBlake2b512(nil)
	if err != nil {
		return addr, err
	}
	checksum.Write(all)
	resSum := checksum.Sum(nil)
	addr = base58.Encode(types.MustHexDecodeString(addressType + pubkey + fmt.Sprintf("%x", resSum[:2])))
	return addr, nil
}

func AddressToPubkey(input string) (string, error) {
	decodedByte := base58.Decode(input)
	decodedStr := fmt.Sprintf("%x", decodedByte)
	decodedLen := len(decodedStr)
	if decodedLen != 70 {
		return "", fmt.Errorf("not address: %s", input)
	}
	pubkey := "0x" + decodedStr[2:66]

	_, err := types.NewAddressFromHexAccountID(pubkey)
	if err != nil {
		return "", fmt.Errorf("not address: %s", input)
	}

	return pubkey, nil
}

func DotToUnit(input decimal.Decimal) decimal.Decimal {
	unit, _ := decimal.NewFromString("10000000000")
	return input.Div(unit)
}

func UnitToDot(input decimal.Decimal) decimal.Decimal {
	unit, _ := decimal.NewFromString("10000000000")
	return input.Mul(unit)
}
