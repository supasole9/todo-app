const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to Mongodb
mongoose.connect('mongodb://test-user:hello@ds141474.mlab.com:41474/practice', {useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

// body-parser to read incoming data
app.use(bodyParser.urlencoded({extended: true}));

// initialize routes
app.use('/api', require('./routes/api'));

// error handling
app.use(function (err, req, res, next){
     res.status(422).send({error: err.message})
});

app.listen(3000, function(){
     console.log("Server is running...");
});
