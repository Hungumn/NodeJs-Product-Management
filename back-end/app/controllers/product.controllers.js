const {getList,getDetail,create,update,deleteById } = require("../services/product.services")


const getProductList = async (req, res) => {
    const productList = await getList();
    if (productList){
        res.status(200).send(productList);
    }else{
        res.status(404).send("Not Found Product List!");
    } 
};

const getProductById = async (req, res) => {
    const {id} = req.params;
    const product = await getDetail(id);
    if (product){
        res.status(200).send(product)
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
};

const addProduct = async (req, res) => {
    let product =req.body;
    const newProduct = await create(product);
    res.status(201).send(newProduct);
};

const updateProductById = async(req, res) => {
    const {id} = req.params;
    const product = req.body;
    
    const productUpdated = await update(id,product)
    if (productUpdated){
        res.status(200).send(productUpdated);
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
};

const deleteProductById = async (req, res) => {
    const {id} = req.params;
    const productDelete = await deleteById(id)
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