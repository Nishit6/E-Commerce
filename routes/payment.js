const express = require('express');
const router = express.Router();
const { isAuthorized } = require('../middlewares/authorized');
const User = require('../model/user');
const Product = require('../model/productModel');

router.post("/payment_gateway/payumoney",(req,res)=>{

    res.send("This feature will be added soon..")
})

module.exports = router;