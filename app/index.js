const express = require('express')
const app = express()
const port = 4000
app.use(express.json());

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
]

app.get('/', (req, res) => {
  res.send("<h1> Product Management System </h1> ")
})


app.get('/products', (req, res) => {
    res.status(200).send(productList);
});

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        const product = productList[index]
        res.status(200).send(product)
    }else{
        res.status(404).send("Not Found Product " +id);
    }
});

app.post('/products', (req, res) => {
    let product =req.body;
    product = {
        id: Math.floor(Math.random() * 100) + 5,
        ...product
    }
    productList= [...productList,product];
    res.status(201).send(product);
});

app.put('/products/:id', (req, res) => {
    const {id} = req.params;
    const {fullName, amount, price,sale} = req.body;
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        const oldProduct = productList[index];
        const updateProduct = {...oldProduct, fullName, amount, price,sale}
        productList[index]= updateProduct;
        res.status(200).send(updateProduct);
    }else{
        res.status(404).send("Not Found Product " +id);
    }
    
})

app.delete('/products/:id', (req, res) => {
    const {id} = req.params;
    const index = productList.findIndex((product) => product.id == id)
    if (index != -1){
        product = productList[index];
        productList.splice(index, 1);
        res.status(200).send(product)
    }else{
        res.status(404).send("Not Found Product " +id);
    }
})

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})