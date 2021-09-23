const router = require('express').Router();
const controller = require('../controllers');

router.get('/', (req, res) => {
  controller.home(req, res);
});

router.get('/contact', (req, res) => {
  controller.contact(req, res);
});

module.exports = router;
