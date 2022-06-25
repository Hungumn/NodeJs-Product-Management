const express = require('express')
const app = express()
const port = 4000
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/products', (req, res) => {
    res.send("All Product");
});

app.get('/products/:id', (req, res) => {
    res.send("Product number: " + req.params.id)
});

app.post('/products', (req, res) => {
    res.send("Create new Product.");
});

app.put('/products/:id', (req, res) => {
    res.send("Update product number: " + req.params.id)
})

app.delete('/products/:id', (req, res) => {
    res.send("Delete Product number" + req.params.id)
})

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})