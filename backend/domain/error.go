package domain

type ErrorFormat struct {
	Code    int
	Message string
}

var (
	ErrorUnauthorized     = ErrorFormat{Code: 401, Message: "Unauthorized"}
	ErrorAuthTokenExpired = ErrorFormat{Code: 4011, Message: "auth token expired"}
	ErrorBadRequest       = ErrorFormat{Code: 400, Message: "bad request"}
	ErrorServer           = ErrorFormat{Code: 500, Message: "Server Error"}

	ErrorPasswordRules = ErrorFormat{Code: 4001, Message: "password rules do not match"}
	ErrorNotFound = ErrorFormat{Code: 4002, Message: "data not found"}
	ErrorPubkey = ErrorFormat{Code: 4003, Message: "public key error"}
	ErrorAddress = ErrorFormat{Code: 4004, Message: "address error"}
)
