if(process.env.Node_ENV!== "production"){
    require('dotenv').config();
}




const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./model/productModel');
const User = require('./model/user');
const seedDB = require('./seed');
// require('./setup');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cookieSession = require('cookie-session');
const Order = require('./model/order');













// Requiring routes

const ProductRoutes = require('./routes/route');
const userRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const profileRoutes = require('./routes/user');
const paymentRoutes=require('./routes/payment');



// Middlewares for google auth
// app.use(cookieSession({
//     name: 'tuto-session',
//     keys: ['key1', 'key2']
//   }))


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//  Sessions for flash messages
const sessionConfig = {

    secret:'thisisasecret',
    resave:false,
    saveUninitialized:true,
}

app.use(session(sessionConfig));
app.use(flash());

// initializing passport and sessions..

app.use(passport.initialize());
app.use(passport.session());

// configuring local passport

passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{

    res.locals.success = req.flash('success');
    
    res.locals.error = req.flash('error');
    
    res.locals.currentUser = req.user;
    // res.locals.retailer = req.user;
    res.locals.isRetailer = req.user;
    next();
})


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log(err);
    console.log("Connection Error");
})

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Google-auth



// const isLoggedIn = (req,res,next)=>{

//     if(req.user){
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }

// // app.use(passport.initialize());
// // app.use(passport.session());

// app.get('/',(req,res)=>{
//     res.redirect('/login');
// })

// app.get('/failure',(req,res)=>{
//     res.redirect('register');
// })

// app.get('/good',isLoggedIn,(req,res)=>{
//     res.redirect('/products');
// })

// app.get('/logout',(req,res)=>{

//     req.session = null;
//     req.logOut();
//     res.redirect('/');
// })





// app.get('/google',
//   passport.authenticate('google', { scope: ['profile','email'] }));

// app.get('/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/failure' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/good');
   
//   });









// calling function....
// seedDB();
// using routes...
app.use(ProductRoutes);
app.use(userRoutes);
app.use(cartRoutes);
app.use(profileRoutes);
app.use(paymentRoutes);






app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started at Port 3000");
})