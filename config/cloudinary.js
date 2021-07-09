const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv');

dotenv.config()

 cloudinary.config({
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});


module.exports = cloudinary;