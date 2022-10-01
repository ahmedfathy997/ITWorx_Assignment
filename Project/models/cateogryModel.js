const mongoose = require('mongoose');

const { Schema } = mongoose;

let cateogryModel = new Schema({
  CateogryID: { type: Number },
  Name: { type: String },
});

module.exports = mongoose.model('Cateogry', cateogryModel);
