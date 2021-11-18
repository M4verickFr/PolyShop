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

  photo : {
    type : String,
    default : null
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

  shop : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'shop'
  },
});

module.exports = mongoose.model('Category', CategorySchema);
