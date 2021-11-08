var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShopSchema = new Schema({

  title : {
    type : String,
    default : "ShopName"
  },

  description : {
    type : String,
    default : "ShopDescription"
  },

  photo : {
    type : String,
    default : null
  },

  url : {
    type : String,
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

module.exports = mongoose.model('Shop', ShopSchema);
