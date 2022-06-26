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
const getProductList = (req, res) => {
    res.status(200).send(productList);
};

const getProductById = (req, res) => {
    const {id} = req.params;
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        const product = productList[index]
        res.status(200).send(product)
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
}

const addProduct = (req, res) => {
    let product =req.body;
    product = {
        id: Math.floor(Math.random() * 100) + 5,
        ...product
    }
    productList= [...productList,product];
    res.status(201).send(product);
}

const updateProductById = (req, res) => {
    const {id} = req.params;
    const {fullName, amount, price,sale} = req.body;
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        const oldProduct = productList[index];
        const updateProduct = {...oldProduct, fullName, amount, price,sale}
        productList[index]= updateProduct;
        res.status(200).send(updateProduct);
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
}

const deleteProductById = (req, res) => {
    const {id} = req.params;
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        product = productList[index];
        productList.splice(index, 1);
        res.status(200).send(product)
    }else{
        res.status(404).send("Not Found Product number " +id);
    }
}

module.exports ={
    getProductList,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
};