var express = require('express');
var router = express.Router();

function usersRouter(strategy, myPassport) {
    return router.get('/', myPassport.authenticate(strategy, {
        failureRedirect: '/signin'
    }),
    function (req, res) {
        res.send('respond with a resource');
    });
}

module.exports = usersRouter;
