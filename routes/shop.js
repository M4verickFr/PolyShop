//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/shop');


//CREATE
router.post("/shop", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/shops", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/shop/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/shop/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/shop/:id", (req, res) => {
    
    controller.delete(req, res);

});


//READ
router.get("/", (req, res) => {
    
    controller.reads(req, res);

});

module.exports = router;