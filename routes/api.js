const express = require('express');
const router = express.Router();
const Todos = require('../Model/todos');

// retrieve all todos
router.get('/todos', function(req,res,next){
     Todos.find({}).then(function(todos){
          res.send(todos)
     });
});

// retrieve a specific todo
router.get('/todos/:id', function(req,res,next){
     res.send({type: 'GET'});
});

// create a new todo
router.post('/todos', function(req,res,next){
     Todos.create(req.body).then(function(todos){
          res.send(todos);
     }).catch(next);
});

// edit a todo
router.put('/todos/:id', function(req,res,next){
     Todos.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
          console.log(req.body)
          Todos.findOne({_id: req.params.id}).then(function(todo){
               res.send(todo);
          });
     });
});

//delete a todo
router.delete('/todos/:id', function(req,res,next){
     Todos.findByIdAndRemove({_id: req.params.id}).then(function(todo){
          res.send(todo);
     });
});

module.exports = router;
