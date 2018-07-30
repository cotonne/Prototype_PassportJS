// Import Express module
const express = require('express');
const router = express.Router();

// Passport Setup
const MyPassport = require('passport');

// Import JWT module
const jwt = require('jsonwebtoken');

// route to start OAuth2 authentication flow with Github
router.get('/github', MyPassport.authenticate('github'));

// route for callback from GitHub
router.get('/github/callback',
           
  // Get user profile with authorization code and access token
  MyPassport.authenticate('github', {session: false}),
  
  // Issue JSON Web Token
  function(req, res) {
    
    // define the token payload
    let payload = {username: req.user.username, GitHubId: req.user.GitHubId}
    
    /*
     * payload variable must be a string, otherwise there is no way to properly encode the exp field 
     * because there is no way to represent a property inside an string in JSON.
     * If exp is not used, the payload could be define like this :
     * let payload = JSON.stringify(req.user);
     */
    
    // sign the token
    let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h', algorithm: 'HS512'});
    // send the token
    res.json({token});
  }
);

module.exports = router; 
