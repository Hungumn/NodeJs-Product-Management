const express = require('express')
var cors = require('cors');
const router = require("./routers/root.router")
const app = express()
const port = 4000
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})

//setup sequelize
const {sequelize} = require("./model/index.js");
sequelize.sync({ alter:true });