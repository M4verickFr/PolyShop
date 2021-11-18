function createCategory(req, res) {
    let Category = require('../models/category');
    let newCategory = Category ({
        title: req.body.title,
        description : req.body.description,
        available : req.body.available,
        createdBy : req.body.createdBy,
        photo: req.body.photo,
        
        //Foreign Key
        shop : req.body.shop
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

    console.log(req.params.id);
    Product.find(
        {
            category : req.params.id
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
            photo: req.body.photo
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
