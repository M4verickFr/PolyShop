var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  
  title : {
    type : String,
    default : "ProductName"
  },

  description : {
    type : String,
    default : "ProductDescription"
  },

  categories : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "categories"
  },

  shops : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'shops'
  },

  price : {
    type : Number,
    default : 0.0
  },

  productWidth : {
    type : Number,
    default : 0.0
  },

  productDepth : {
    type : Number,
    default : 0.0
  },

  productHeight : {
    type : Number,
    default : 0.0
  },

  available : {
    type : Boolean,
    default : true
  },

  releaseDate : {
    type : Date,
    default : null
  },

  createdAt : {
    type : Date,
    default : Date.now
  },

  createdBy : {
    type : String,
    default : null
  },

  updatedAt : {
    type : Date,
    default : null
  },

  updatedBy : {
    type : String,
    default : null
  },

  deletedAt : {
    type : Date,
    default : null
  },

  deletedBy : {
    type : String,
    default : null
  },

});

module.exports = mongoose.model('Product', ProductSchema);
