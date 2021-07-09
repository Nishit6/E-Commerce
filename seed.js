const mongoose = require('mongoose');
const Product = require('./model/productModel');




const productArray = [

    {
        img:"https://images.unsplash.com/photo-1599855129764-f4cc28295202?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name:"Headphones",
        price:30000,
        retailerName:'xyz',
        desc:" Roll over image to zoom in Fire-Bolt Blast 1300 On-Ear Metal Finish Wireless Bluetooth Over The Ear Headphone, 18-Hour Playtime with in-Built Mic, 40mm Driver with HD Sound, Deep Bass & Ultra-Soft Ear Cushions (Black)"
    },
    {
        img:"https://images.unsplash.com/photo-1617343145172-8791ec103a9a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name:"iphone 12",
        price:120000,
        retailerName:'patrik',
        desc:" The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro"
    },
    {
        img:"https://images.unsplash.com/photo-1618601630079-6dcc23c4f55d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name:"Mouse",
        price:200,
        retailerName:'Aashish',
        desc:"A computer mouse (plural mice, rarely mouses)[1] is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a pointer on a display, which allows a smooth control of the graphical user interface of a computer."
    },
    {
        img:"https://images.unsplash.com/photo-1532989029401-439615f3d4b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name:"Drone",
        price:99999,
        retailerName:'Mohit',
        desc:" DJI Air 2S is a powerful all-in-one camera drone designed for creators on the move. It offers a 1-inch CMOS sensor, 5.4K video recording, an innovative MasterShots feature, 12km 1080p video transmission, four-directional obstacle sensing, and more. DJI Air 2S is the perfect way to turn any adventure into a stunning visual creation."
    },
    {
        img:"https://images.unsplash.com/photo-1583593711082-aaa381feb2f1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name:"MIC",
        price:1200,
        retailerName:'ayush',
        desc:"MAONO AU-902 USB Condenser Podcast Microphone, with Dual Volume Control, Mute Button, Monitor Headphone Jack, Plug and Play Mic for Vlogging, Gaming, Studio Recording, YouTube",
      
    },
    {
        img:"https://images.unsplash.com/photo-1617201143043-6d38a3f7264a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxKOXlyUGFIWFJRWXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        name:"Headphones",
        price:30000,
        retailerName:'Nishit',
        desc:"Roll over image to zoom in C6T Body Temperature Bracelet Watch Smart Sports Bracelet IP67 Information Push Sleep Exercise Step Waterproof Sports Smart Bracelet Blood Pressure Monitoring"
    }
]

 function seed (){

    Product.insertMany(productArray)
   
 .then(()=>{
        console.log("Data Seeded Successfully....");
    })
    
.catch((err)=>{
        console.log(err);
        console.log("Seeding Error");
    })
}


module.exports = seed;