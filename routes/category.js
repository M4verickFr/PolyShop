//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/category');

//CREATE
router.post("/category", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/categories", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/category/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/category/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/category/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;