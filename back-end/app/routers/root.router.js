const express = require('express');

const productRoute = require("./products.router")
const router = express.Router();

router.use("/products",productRoute);

module.exports = router;