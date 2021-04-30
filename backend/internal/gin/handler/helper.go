package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"github.com/guanfantech/SubGameCenterService/domain"
)

func Success(c *gin.Context, data interface{}) {
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": data,
	})
}

func Failed(c *gin.Context, err domain.ErrorFormat)  {
	switch err {
	case domain.ErrorServer:
		c.JSON(http.StatusInternalServerError, gin.H{
			"code": err.Code,
			"message": err.Message,
		})
	case domain.ErrorUnauthorized:
		c.JSON(http.StatusUnauthorized, gin.H{
			"code": err.Code,
			"message": err.Message,
		})
	default:
		c.JSON(http.StatusBadRequest, gin.H{
			"code": err.Code,
			"message": err.Message,
		})
	}
}
