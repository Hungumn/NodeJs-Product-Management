const express = require("express");
const productRoute = express.Router();
const {getProductList,getProductById,addProduct,updateProductById,deleteProductById}= require("../controllers/product.controllers")



productRoute.get("/",getProductList );

productRoute.get('/:id', getProductById);

productRoute.post('/', addProduct);

productRoute.put('/:id', updateProductById)

productRoute.delete('/:id', deleteProductById)

module.exports = productRoute;