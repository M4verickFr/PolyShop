function createShop(req, res) {
    let Shop = require('../models/shop');
    let newShop = Shop ({
        title: req.body.title,
        description : req.body.description,
        url : req.body.url,
        createdBy : req.body.createdBy
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

 function getCategoriesByShop(req, res){
    let Category = require("../models/category");

    console.log(req.params.id);
    Category.find(
        {
            shop : req.params.id
        }
    ).then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });

}

 function updateShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {
            title: req.body.title,
            description : req.body.description,
            url : req.body.url
        }, 
        {
            new : true
        }
    ).then((updateShop) => {
        res.status(200).json(updateShop);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findOneAndRemove(
        {
            _id : req.params.id
        }
    ).then((deleteShop) => {
        res.status(200).json(deleteShop);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createShop;
module.exports.reads = readShops;
module.exports.read = readShop;
module.exports.findCategories = getCategoriesByShop;
module.exports.delete = deleteShop;
module.exports.update = updateShop;