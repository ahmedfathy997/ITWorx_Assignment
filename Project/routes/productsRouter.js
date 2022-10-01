const express = require('express');

function routes(Product) {
  const productsRouter = express.Router();
  productsRouter
    .route('/products')
    .post((req, res) => {
      const product = new Product(req.body);
      product.save();
      return res.status(201).json(product);
    })
    .get((req, res) => {
      Product.find((err, Product) => {
        const query = {};
        if (req.query.CateogryID) {
          query.CateogryID = req.query.CateogryID;
        }
        if (err) {
          return res.send(err);
        }
        return res.json(Product);
      });
    });
  productsRouter
    .route('/products/:CateogryID')
    .get((req, res) => {
      Product.findById(req.params.CateogryID, (err, Product) => {
        if (err) {
          return res.send(err);
        }
        return res.json(Product);
      });
    })
    .put((req, res) => {
      Product.findById(req.params.CateogryID, (err, Product) => {
        if (err) {
          return res.send(err);
        }
        Product.Name = req.body.Name;
        Product.Price = req.body.Price;
        Product.Quantity = req.body.Quantity;
        Product.ImgURL = req.body.ImgURL;
        Product.CateogryID = req.body.CateogryID;
        Product.save();
        return res.json(Product);
      });
    });

  return productsRouter;
}

module.exports = routes;
