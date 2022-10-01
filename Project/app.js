const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = mongoose.connect(
  'mongodb+srv://Ahmed:qweasdzxc@itworxapi.yzuuipa.mongodb.net/DB'
);
const port = process.env.PORT || 3000;
const Product = require('./models/productModel');
const Cateogry = require('./models/cateogryModel');

const productsRouter = require('./routes/productsRouter')(Product);
const categoriesRouter = require('./routes/categoriesRouter')(Cateogry);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', productsRouter);
app.use('/', categoriesRouter);
app.get('/', (req, res) => {
  res.send('Welcome to My Nodemon API');
});

app.listen(port, () => {
  console.log(`Runnign on port, ${port}`);
});
