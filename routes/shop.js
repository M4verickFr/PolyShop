//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/shop');


//READ
router.get("/", (req, res) => {
    
    controller.reads(req, res);

});

module.exports = router;