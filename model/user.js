const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:10,
      
    },
    address:{
        type:String
    },
    profileImage:String,
    role:{
        type:String,
        required:true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
    
})


// plugin will add local Mongoose into user schema which help to add username and password by default..
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

module.exports = User;