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

  price :  {
      type : Float,
      default : 0
  },

  url : {
    type : String,
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

  updateAt : {
    type : Date,
    default : false
  },

  updateBy : {
    type : String,
    default : false
  },

  deleteAt : {
    type : Date,
    default : false
  },

  deleteBy : {
    type : String,
    default : false
  },

});

module.exports = mongoose.model('Shop', ShopSchema);
