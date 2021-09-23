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

  price : {
    type : Float,
    default : 0.0
  },

  price : {
    type : int,
    default : 0
  },

  productWidth : {
    type : Float,
    default : 0.0
  },

  productDepth : {
    type : Float,
    default : 0.0
  },

  productHeight : {
    type : Float,
    default : 0.0
  },

  available : {
    type : Boolean,
    default : true
  },

  releaseDate : {
    type : Date,
    default : false
  },

  createdAt : {
    type : Date,
    default : Date.now
  },

  createdBy : {
    type : String,
    default : false
  },

  updatedAt : {
    type : Date,
    default : false
  },

  updatedBy : {
    type : String,
    default : false
  },

  deletedAt : {
    type : Date,
    default : false
  },

  deletedBy : {
    type : String,
    default : false
  },

});

module.exports = mongoose.model('Product', ProductSchema);
