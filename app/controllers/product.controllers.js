const {getList,getDetail,create,update,deleteById } = require("../services/product.services")


const getProductList = (req, res) => {
    const productList = getList();
    if (productList){
        res.status(200).send(productList);
    }else{
        res.status(404).send("Not Found Product List!");
    } 
};

const getProductById = (req, res) => {
    const {id} = req.params;
    const product = getDetail(id);
    if (product){
        res.status(200).send(product)
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
};

const addProduct = (req, res) => {
    let product =req.body;
    const newProduct = create(product);
    res.status(201).send(newProduct);
};

const updateProductById = (req, res) => {
    const {id} = req.params;
    const { fullName, amount, price, sale } = req.body;
    
    const product = update(id,fullName, amount, price, sale)
    if (product){
        res.status(200).send(product);
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
};

const deleteProductById = (req, res) => {
    const {id} = req.params;
    const productDelete = deleteById(id)
    if (productDelete){
        res.status(200).send(productDelete)
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
};

module.exports ={
    getProductList,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
};