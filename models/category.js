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

module.exports = mongoose.model('Category', CategorySchema);
