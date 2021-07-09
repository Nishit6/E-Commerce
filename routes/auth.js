const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../model/user');
const passport = require('passport');
const upload = require('../config/multer');
const cloudinary = require('../config/cloudinary');
const path = require('path');


// registering New user

router.get('/register',(req,res)=>{


    res.render('auth/singup');
})

router.post('/register',upload.single('profileImage'),async(req,res)=>{

    try{


        let imageurl;
        if (! req.file || ! req.file.path) {
            imageurl = 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg'
        }else{
        const result = await cloudinary.uploader.upload(req.file.path)
        imageurl = result.secure_url
        }

        
        
        
        const user =  new  User
        ({
            email:req.body.email,
            username:req.body.username,
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            role:req.body.role,
            address:req.body.address,
            phone:req.body.phone,
            profileImage:imageurl
    });
    const newUser = await User.register(user,req.body.password);
    console.log(newUser);
    req.flash('success','Registered Successfully');
    res.redirect('/login');}
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }

})

// logging in a user

router.get('/login',(req,res)=>{

    
    res.render('auth/login');
})


router.post('/login',
  passport.authenticate('local',
                                 { 
                                   failureRedirect: '/login',
                                   failureFlash: true }
                                   
),(req,res)=>{
   
    req.flash('success','Logged in Successfully!!');
    res.redirect('/products');
});

// logging out

router.get('/logout',(req,res)=>{

    req.logOut();
    req.flash('success','Logged out Successfully!!');
    res.redirect('/login');
})



module.exports = router;