package adminAccount

import (
	"crypto/md5"
	"fmt"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"github.com/guanfantech/SubGameCenterService/internal/gin/handler"
	"github.com/guanfantech/SubGameCenterService/domain"
	"github.com/guanfantech/SubGameCenterService/internal/provider"
)

type request struct {
	Account  string `json:"account" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type response struct {
	Token   string `json:"token"`
	Account string `json:"account"`
	UUID    string `json:"uuid"`
}

func Login(c *gin.Context)  {
	var req request
	if err := c.ShouldBindJSON(&req); err != nil {
		zap.S().Infof("err: %v req: %v", err, c.Request)
		handler.Failed(c, domain.ErrorBadRequest)
		return
	}

	adminRepo, err := provider.NewAdminRepo()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorServer)
		return
	}
	adminData, err := adminRepo.GetUserByAccount(req.Account)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorBadRequest)
		return
	}
	if adminData == nil || fmt.Sprintf("%x", md5.Sum([]byte(req.Password))) != adminData.Password {
		handler.Failed(c, domain.ErrorUnauthorized)
		return
	}

	params := make(map[string]string)
	params["account"] = adminData.Account
	params["UUID"] = adminData.UUID.String()
	tokenUtil, _ := provider.NewJwt()
	accessToken, infoJsonStr, err := tokenUtil.GenToken(params)
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorUnauthorized)
		return
	}

	redis, err := provider.NewRedis()
	if err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorUnauthorized)
		return
	}
	defer redis.Close()
	key := tokenUtil.GetAccessTokenKey(params["account"])
	config := provider.NewConfig()
	ttl := config.Jwt.Access_token_exp_sec
	if err = redis.SetEx(key, infoJsonStr, ttl); err != nil {
		zap.S().Warn(err)
		handler.Failed(c, domain.ErrorUnauthorized)
		return
	}

	c.SetCookie(domain.CookieName, accessToken, 60*60*24, "/", "", false, false)
	handler.Success(c, &response{
		Token:   accessToken,
		UUID:    adminData.UUID.String(),
		Account: adminData.Account,
	})
}
