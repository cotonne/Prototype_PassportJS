// Import Express module
const express = require('express');
const router = express.Router();

// Passport Setup
const MyPassport = require('passport');

// Route if authentication failed
router.get('/failed', function(req, res){
    res.send("Authentication failed! You are not authenticated!");
  }
);

// Route to start OAuth2 authentication flow with Github
router.get('/github', MyPassport.authenticate('github'));

// Route for callback from GitHub
router.get('/github/callback',
           
  // Get user profile with authorization code and access token
  MyPassport.authenticate('github', {session: false}),
  
  // Greetings 
  function(req, res) {
    if(req.isAuthenticated()){
      res.send("Hello " + req.user.username + "!")
    } else {
      res.redirect('signin/failed')
    }
  }

);

module.exports = router; 
 
