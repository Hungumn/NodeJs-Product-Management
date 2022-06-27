const {Product} = require("../model/index")

const getList = async () =>{
    const productList = await Product.findAll();
    if (productList){
        return productList;
    }else{
        return false;
    }
}

const getDetail = async (id) =>{
    const product = await Product.findOne({
        where: {
            id
        }
    });
    if (product){
        return product;
    }
    else {
        return false;
    }
}

const create = async (product) =>{
    const newProduct = await Product.create(product)
    return newProduct;
}

const update = async (id,product ) =>{
    const productUpdate = await getDetail(id);
    if (productUpdate) {
        productUpdate.fullName = product.fullName;
        productUpdate.amount = product.amount;
        productUpdate.price = product.price;
        productUpdate.sale = product.sale;
        const productUpdated = await productUpdate.save();
      return productUpdated;
    } else {
      return false;
    }
}

const deleteById = async (id) =>{
    const productDelete = await getDetail(id);
    if (productDelete){
        await Product.destroy({ 
            where :{
                id,
            }
        });
        
        return productDelete;
    }else{
        return false;
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
};