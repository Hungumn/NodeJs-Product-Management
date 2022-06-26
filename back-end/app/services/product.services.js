let productList = [
    {
        "id":1,
        "fullName":"MacBook Air with M1 chip",
        "amount":10,
        "price":999,
        "sale":10
    },
    {
        "id":2,
        "fullName":"MacBook Air with M2 chip",
        "amount":3,
        "price":1999,
        "sale":1
    },
    {
        "id":3,
        "fullName":"iPhone 13 ProMax",
        "amount":10,
        "price":1350,
        "sale":12
    },
    {
        "id":4,
        "fullName":"iPhone 12 Pro",
        "amount":10,
        "price":799,
        "sale":20
    },
    {
        "id":5,
        "fullName":"iPad Pro 11-inch",
        "amount":66,
        "price":699,
        "sale":10
    },
];

const getList = () =>{
    if (productList){
        return productList;
    }else{
        return false;
    }
}

const getDetail =(id) =>{
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        const product = productList[index]
        return product;
    }else{
        return false;
    }
}

const create = (product) =>{
    const newProduct = {
        id: Math.floor(Math.random() * 100) + 5,
        ...product
    }
    productList= [...productList,newProduct];
    return newProduct;
}

const update = (id,fullName, amount, price, sale ) =>{
    const index = productList.findIndex((product) => product.id == id);
    if (index !== -1) {
      const productOld = productList[index];
      const productUpdate = { ...productOld, fullName, amount, price, sale };
      productList[index] = productUpdate;
      return productUpdate;
    } else {
      return false;
    }
}

const deleteById = (id) =>{
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        product = productList[index];
        productList.splice(index, 1);
        return product;
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