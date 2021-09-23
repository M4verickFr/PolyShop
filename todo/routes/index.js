const router = require('express').Router();
const controller = require('../controllers');

router.get('/todo/create', (req, res) => {
  controller.viewCreateTodo(req, res);
});

router.get('/todo/modify', (req, res) => {
  controller.viewModifyTodo(req, res);
});

router.get('/todo/delete', (req, res) => {
  controller.viewDeleteTodo(req, res);
});

module.exports = router;
