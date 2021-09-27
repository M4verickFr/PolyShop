//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/product');

//CREATE
router.post("/product/create", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/products", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/product/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/product/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/product/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;