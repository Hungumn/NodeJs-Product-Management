const express = require("express");
const productRoute = express.Router();
const {getProductList,getProductById,addProduct,updateProductById,deleteProductById}= require("../controllers/product.controllers")
const { checkEmpty,checkSales,checkPrice,checkAmount, }=require("../middlewares/validations/product.validation")


productRoute.get("/",getProductList );

productRoute.get('/:id', getProductById);

productRoute.post('/', checkEmpty,checkSales,checkPrice,checkAmount , addProduct);

productRoute.put('/:id',checkEmpty,checkSales ,checkPrice,checkAmount ,updateProductById)

productRoute.delete('/:id', deleteProductById)

module.exports = productRoute;