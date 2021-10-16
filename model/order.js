const mongoose = require('mongoose');
const Product = require('./productModel');

const orderSchema = new mongoose.Schema({

    txnid:{
        type:String,
        require:true,
        unique:true
    },
    amount:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    orderedProducts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }



})

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;