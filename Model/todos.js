const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
     name: {
          type: String,
          required: [true, 'Name Field is required']
     },
     priority: {
          type: Number,
          required: [true, 'Priority level is required']
     }
});

const Todos = mongoose.model('todos', todoSchema);

module.exports = Todos;
