const router = require('express').Router();
const controller = require('../controllers');

router.get('/api/todos', (req, res) => {
  controller.getAllTodos(req, res);
});

router.get('/api/todo/:id', (req, res) => {
  controller.getOneTodo(req, res);
});

router.post('/api/todo', (req, res) => {
  controller.createTodo(req, res);
});

router.put('/api/todo/:id', (req, res) => {
  controller.modifyTodo(req, res);
});

router.delete('/api/todo/:id', (req, res) => {
  controller.deleteTodo(req, res);
});

router.post('/api/todo/done/:id', (req, res) => {
  controller.doneTodo(req, res);
});

router.get('/api/todos/done', (req, res) => {
  controller.getAllTodosDone(req, res);
});

router.get('/api/todos/current', (req, res) => {
  controller.getAllTodosCurrent(req, res);
});


module.exports = router;
