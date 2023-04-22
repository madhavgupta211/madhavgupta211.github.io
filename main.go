package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

var whitelist map[string]bool

func setupRouter() *gin.Engine {

	r := gin.Default()

	r.Use(static.Serve("/", static.LocalFile("./mavi-frontend/build", true)))

	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	api := r.Group("/api")

	api.Use(func(c *gin.Context) {
		oauthToken := c.Query("oauth_token")
		if oauthToken == "" {
			oauthToken = c.GetHeader("Authorization")
		}

		if oauthToken == "" {
			// Return an error response if OAuth token is missing
			c.JSON(http.StatusUnauthorized, gin.H{"error": "OAuth token is required"})
			c.Abort()
			return
		}

		// fmt.Print("till her")

		// // Create a new OAuth2 Service instance
		// srv, err := oauth2.NewService(c)
		// if err != nil {
		// 	fmt.Println(err)
		// 	// Return an error response if failed to create OAuth2 service
		// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create OAuth2 service"})
		// 	c.Abort()
		// 	return
		// }

		// fmt.Print("till here")

		// // Call the tokeninfo endpoint to verify the token
		// tokenInfo, err := srv.Tokeninfo().IdToken(oauthToken).Do()
		// if err != nil {
		// 	// Return an error response if failed to verify token
		// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid OAuth token"})
		// 	c.Abort()
		// 	return
		// }

		// fmt.Print("till here 2")

		// Access the fields in the tokenInfo response
		// You can add your custom logic here based on the tokenInfo response
		// Check if the email is whitelisted
		email := oauthToken
		if !isEmailWhitelisted(email) {
			// Return an error response if email is not whitelisted
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Access denied"})
			c.Abort()
			return
		}

		fmt.Print("till here 3")

		// Set tokenInfo in Gin context for other handlers to access
		c.Set("email", email)

		// Continue to the next handler
		c.Next()
	})

	api.GET("/ping", func(c *gin.Context) {
		email, _ := c.Get("email")
		c.JSON(http.StatusOK, gin.H{"message": fmt.Sprintf("Hello, %s!", email)})
	})

	return r
}

func loadWhitelist() {
	// Read the config file
	data, err := ioutil.ReadFile("whitelist.txt")
	if err != nil {
		fmt.Println("Failed to read whitelist config file:", err)
		return
	}

	// Parse the config file
	whitelist = make(map[string]bool)
	emails := strings.Split(string(data), "\n")
	for _, email := range emails {
		if email != "" {
			whitelist[email] = true
		}
	}
}

func isEmailWhitelisted(email string) bool {
	// Check if the email is whitelisted
	_, ok := whitelist[email]
	return ok
}

func main() {
	loadWhitelist()
	router := setupRouter()
	router.Run(":8080")
}
