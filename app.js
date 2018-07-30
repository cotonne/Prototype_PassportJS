
//Mongoose Setup
const MyMongoose = require('mongoose');
const MyMongooseConfig = require('./config/MyMongoose.js');

MyMongoose.connect(MyMongooseConfig.database,{ useNewUrlParser: true })
.then(() => {
    console.log("Successfully connected to MongoDB.");    
  }).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
  });


// Express Setup
const express = require('express');
const app = express();

// Passport Setup
const MyPassport = require('./config/MyPassport.js');
app.use(MyPassport.initialize());


// Route for Single Page Application (coming soon)
app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));

// route (private access)
const PrivateRouter = require('./routes/private.js');
app.use('/private', MyPassport.authenticate('bearer', {session: false}), PrivateRouter);

// route for sign-in
const SigninRouter = require('./routes/signin.js');
app.use('/signin', SigninRouter);


/* Start Express App */

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));
