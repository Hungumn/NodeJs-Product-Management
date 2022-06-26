const express = require("express");
const productRoute = express.Router();
const {getProductList,getProductById,addProduct,updateProductById,deleteProductById}= require("../controllers/product.controllers")
const { checkEmpty,checkSales }=require("../middlewares/validations/product.validation")


productRoute.get("/",getProductList );

productRoute.get('/:id', getProductById);

productRoute.post('/', checkEmpty,checkSales , addProduct);

productRoute.put('/:id',checkEmpty,checkSales ,updateProductById)

productRoute.delete('/:id', deleteProductById)

module.exports = productRoute;