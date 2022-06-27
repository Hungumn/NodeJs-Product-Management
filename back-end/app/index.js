const express = require('express')
const router = require("./routers/root.router")
const app = express()
const port = 4000
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send("<h1> Product Management System </h1> ")
})


app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})

//setup sequelize
const {sequelize} = require("./model/index.js");
sequelize.sync({ alter:true });