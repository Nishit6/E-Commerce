  
const express = require('express');
const router = express.Router();
const { isAuthorized } = require('../middlewares/authorized');
const User = require('../model/user');
const Product = require('../model/productModel');


router.get('/user/:id/me',isAuthorized,async(req,res)=>{
 
        const userInfo = await User.findById(req.params.id)
    

        res.render('user/user');
    
  
  
})
router.get('/user/:id/edit',isAuthorized,async(req,res)=>{
        const editUser =  await User.findById(req.params.id);
        res.render('user/edit');
})

router.patch('/user/:id',isAuthorized,async(req,res)=>{

       await User.findByIdAndUpdate(req.params.id,req.body);
        req.flash('success','Updated Successfully');
    res.redirect(`/user/${req.params.id}/me`);
   
})
module.exports = router;