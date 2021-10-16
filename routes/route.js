const express = require('express');
const { Router } = require('express');
const router = express.Router();
const Product = require('../model/productModel');
const Review = require('../model/review');
const {isAuthorized} = require('../middlewares/authorized');
const {confirmRetailer} = require('../middlewares/retailerName');
const {authRole}  = require('../middlewares/authRole');



// Getting all the products

router.get('/',async(req,res)=>{

   try {
    const products = await Product.find({});
   
    res.render('products/main',{products});
   } catch (error) {
       console.log("error");
       req.flash('error','Invalid Operation');
       res.redirect('/error');
   } 
})

// Creating Form to ADD NEW Products....

router.get('/products/new' ,isAuthorized,authRole,async(req,res)=>{

    

    res.render('products/new');
})

// Adding new Products...

router.post('/products',isAuthorized ,async(req,res)=>{

   try {
    await Product.create(req.body.product)
    req.flash('success','Product Created Successfully');
    res.redirect('/products');
   } catch (error) {
    console.log("error");
    req.flash('error','Invalid Operation');
    res.redirect('/error');
   }
    

   
})

// Showing Details For  a Particular Product...

router.get('/products/:id',async(req,res)=>{

    try {
        const showProduct = await  Product.findById(req.params.id).populate('reviews');

   res.render('products/show',{showProduct});
    } catch (error) {
        console.log("error");
        req.flash('error','Invalid Operation');
        res.redirect('/error');
    }
   
})

// editing Products..

router.get('/products/:id/edit', isAuthorized ,confirmRetailer,authRole,async(req,res)=>{

    
    const editProduct =  await Product.findById(req.params.id);
    res.render('products/edit',{editProduct});
 })



router.patch('/products/:id', isAuthorized,confirmRetailer,authRole,async(req,res)=>{

   try {
    await Product.findByIdAndUpdate(req.params.id,req.body.product);
    req.flash('success','Updated Successfully');
    res.redirect(`/products/${req.params.id}`);
   
   } catch (error) {
    console.log("error");
    req.flash('error','Invalid Operation');
    res.redirect('/error');
   }
 
})

router.delete('/products/:id', isAuthorized  ,confirmRetailer,authRole,async(req,res)=>{

   try {
    await Product.findByIdAndDelete(req.params.id);
    req.flash('success','Deleted Successfully');
    res.redirect('/products');
   } catch (error) {
    console.log("error");
    req.flash('error','Invalid Operation');
    res.redirect('/error');
   }
    
  
 })
 

router.post('/products/:id/Reviews',isAuthorized ,async(req,res)=>{

    const product = await Product.findById(req.params.id);
    const review = new Review({

        user: req.user.username,
        ...req.body
    });

    product.reviews.push(review);

    await review.save();
    await product.save();



   res.redirect(`/products/${req.params.id}`);
})

router.get('/error',(req,res)=>{

    res.status(400).render('error');
})







module.exports = router;