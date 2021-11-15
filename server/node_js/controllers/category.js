function createCategory(req, res) {
    let Category = require('../models/category');
    let newCategory = Category ({
        title: req.body.title,
        description : req.body.description,
        available : req.body.available,
        createdBy : req.body.createdBy,
        
        //Foreign Key
        shops : req.body.shops
    });
  
    newCategory.save()
    .then((savedCategory) => {
        res.json(savedCategory);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCategories(req, res) {

    let Category = require("../models/category");

    Category.find({})
    .then((categories) => {
        res.status(200).json(categories);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function getProductByCategory(req, res){
    let Product = require("../models/product");

    console.log(req.headers.category);
    Product.find(
        {
            categories : req.headers.category
        }
    ).then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });

}

function readCategory(req, res) {

    let Category = require("../models/category");

    Category.findById(
        {
            _id : req.params.id
        }
    ).then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateCategory(req, res) {

    let Category = require("../models/category");

    Category.findByIdAndUpdate(
        {
            _id: req.params.id
        }, 
        {
            title: req.body.title,
            description : req.body.description,
            available : req.body.available,
            shop : req.body.shop,
            updatedAt : Date.now
        }, 
        {
            new : true
        }
    ).then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteCategory(req, res) {

    let Category = require("../models/category");

    Category.findOneAndRemove(
        {
            _id : req.params.id
        }
    ).then((deletedCategory) => {
        res.status(200).json(deletedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createCategory;
module.exports.reads = readCategories;
module.exports.read = readCategory;
module.exports.findProduct = getProductByCategory;
module.exports.delete = deleteCategory;
module.exports.update = updateCategory;
