const express = require('express');
const productsRouter = express.Router();
const products_data = require('./../data/products.json');



productsRouter.route('/').get((req,res)=> {
    res.render('products', { products : products_data });
})

productsRouter.route('/:id').get((req,res)=> {
     const id = req.params.id;
     //console.log(products_data[id]);
     res.render('product_detail',  { products :products_data[id] }   );
})


module.exports = productsRouter;