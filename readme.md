
This application is a demonstration prototype just to show how to use PassportJS framework with ExpressJS. This prototype implements 2 strategies: OAuth 2 with GitHub and HTTP Bearer with JSON Web Token.

# Getting started

* Download this prototype

$ git clone

* Install required dependencies

$ npm install

* Register your application on GitHub with :

Homepage URL: http://127.0.0.1:3000
Authorization callback URL : http://127.0.0.1:3000/signin/github/callback

* Run it

$ PORT=3000 HOST=127.0.0.1 CLIENT_ID=xxxxxxxxxxxxxxxx CLIENT_SECRET=yyyyyyyyyyyyyyyyyyyyy JWT_SECRET=zzzzzzz node app.js
 
# Test it

1.Open your browser on http://127.0.0.1:3000/signin/github and accept the authorization request on GitHub

2.Copy the JSON Web token

3.Access to a private ressource: curl -i http://127.0.0.1:3000/private/hello -H "Authorization: Bearer YourToken"
