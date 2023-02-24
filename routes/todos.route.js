const {Router} = require('express')
const router = Router()
const {todosController} = require("../controllers/todos.controller")

router.post("/todos", todosController.addTodo)
router.get("/todos", todosController.getTodo)
router.patch("/todos/:id", todosController.editTodo)
router.delete("/todos/:id", todosController.deleteTodo)

module.exports = router;