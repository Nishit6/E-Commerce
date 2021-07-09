const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Product = require('../model/productModel');
const {isAuthorized} = require('../middlewares/authorized');




router.get('/user/:userId/cart',isAuthorized,async(req,res)=>{

    const  user = await User.findById(req.user).populate('cart');


    res.render('cart/showCart',{userCart:user.cart});



})


router.post('/user/:id/cart',isAuthorized,async(req,res)=>{

    const product =await Product.findById(req.params.id);

    const user = req.user;

     user.cart.push(product); 

     await  user.save();

    res.redirect(`/user/${req.params.id}/cart`);
})

router.delete('/user/:userid/cart/:id',isAuthorized ,async(req,res)=>{

    const {userid,id} = req.params;

    await User.findByIdAndUpdate(userid,{$pull:{cart:id}})
    res.redirect(`/user/${req.params.id}/cart`);
})


module.exports=router;