const mongoose = require('mongoose');

const { Schema } = mongoose;

const productModel = new Schema({
  Name: { type: String },
  Price: { type: String },
  Quantity: { type: String },
  ImgURL: { type: String },
  CateogryID: { type: Number },
});

module.exports = mongoose.model('Product', productModel);
