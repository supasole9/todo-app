const express = require('express');
const router = express.Router();

// retrieve all todos
router.get('/todos', function(req,res){
     res.send('This is a GET from api.js');
});

// retrieve a specific todo
router.get('/todos/_id', function(req,res){
     res.send('This is a GET from api.js');
});

// create a new todo
router.post('/todos', function(req,res){
     res.send('This is a GET from api.js');
});

// edit a todo
router.put('/todos/_id', function(req,res){
     res.send('This is a GET from api.js');
});

//delete a todo
router.delete('/todos/_id', function(req,res){
     res.send('This is a GET from api.js');
});

module.exports = router;
