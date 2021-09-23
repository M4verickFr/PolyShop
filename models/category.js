var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({

  title : {
    type : String,
    default : "CategoryName"
  },

  description : {
    type : String,
    default : "CategoryDescription"
  },

  available : {
    type : Boolean,
    default : true
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

module.exports = mongoose.model('Category', CategorySchema);
