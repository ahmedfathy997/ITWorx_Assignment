const express = require('express');

function routes(Cateogry) {
  const categoriesRouter = express.Router();
  categoriesRouter.route('/categories').get((req, res) => {
    Cateogry.find((err, Cateogry) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Cateogry);
    });
  });
  return categoriesRouter;
}

module.exports = routes;
