const Product = require('../model/productModel');

 const confirmRetailer = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(product. retailerName !== req.user.username){

        req.flash('error',"You are not Authorized");
        return res.redirect('/products');
    }
    next();
 }

 module.exports = {confirmRetailer};