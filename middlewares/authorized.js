const isAuthorized = (req,res,next)=>{

    if(!req.isAuthenticated()){

        req.flash('error','Please Login first');
        return res.redirect('/login');

    }
    next();

}



module.exports = {isAuthorized};