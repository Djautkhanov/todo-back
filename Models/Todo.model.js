const mongoose = require('mongoose');

const todoShema = mongoose.Schema({
    text: String,
    done :{
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('Todo', todoShema)
module.exports = Todo