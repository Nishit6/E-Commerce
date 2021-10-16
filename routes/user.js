  
const express = require('express');
const router = express.Router();
const { isAuthorized } = require('../middlewares/authorized');
const User = require('../model/user');
const Product = require('../model/productModel');





router.get('/user/:id/me', isAuthorized, async(req, res) => {
    
        try {
            const userInfo = await User.findById(req.params.id).populate({ 
              path: 'orders',
              populate: {
                path: 'orderedProducts',
                model: 'Product'
              } 
            })
      
            res.render('user/myorders',{orders:userInfo.orders});
        }
        catch (e) {
              console.log(e.message);
              req.flash('error', 'Cannot Place the Order at this moment.Please try again later!');
              res.render('error');
        } 
      })







router.get('/user/:id/profile',isAuthorized,async(req,res)=>{
 
        await User.findById(req.params.id)
    

        res.render('user/user');
    
  
  
})

router.get('/user/:id/edit',isAuthorized,async(req,res)=>{
       await User.findById(req.params.id);
        res.render('user/edit');
})

router.patch('/user/:id',isAuthorized,async(req,res)=>{

       await User.findByIdAndUpdate(req.params.id,req.body);
        req.flash('success','Updated Successfully');
    res.redirect(`/user/${req.params.id}/me`);
   
})
module.exports = router;