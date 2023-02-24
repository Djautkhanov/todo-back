const Todo = require("../Models/Todo.model");

//async await
module.exports.todosController = {
  addTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        text: req.body.text,
      });
      res.json(todo);
    } catch (error) {
      res.json(error);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.json('deleted')
    } catch (error) {
      res.json(error);
    }
  },
  editTodo: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      const newTodo = await Todo.findByIdAndUpdate(req.params.id,{
        done: !todo.done,
      }, {new: true});

      res.json(newTodo);
    } catch (error) {
      res.json(error.message);
    }
  },
  getTodo: async (req, res) => {
    try {
      const todo = await Todo.find();
      res.json(todo);
    } catch (error) {
      res.json(error);
    }
  },
};
