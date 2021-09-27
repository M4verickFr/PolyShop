function createShop(req, res) {
    let Shop = require('../models/shop');
    let newShop = Shop ({
        title: req.body.title,
        description : req.body.description,
        url : req.body.url,
        createdBy : req.body.createdBy,
    });
  
    newShop.save()
    .then((savedShop) => {

        res.json(savedShop);
            
    }, (err) => {
        res.status(400).json(err)
    });

}


function readShops(req, res) {

    let Shop = require("../models/shop");

    Shop.find({})
    .then((shops) => {
        res.status(200).json(shops);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findById({_id : req.params.id})
    .then((shop) => {
        res.status(200).json(shop);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createShop;
module.exports.reads = readShops;
module.exports.read = readShop;