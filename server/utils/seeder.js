const Product = require('../models/product');
const dotenv = require('dotenv');
const scrape = require('./scrape')
const connectDatabase = require('../config/database');

const products = require('../data/product.json');


dotenv.config({path:'../server/config/config.env'});

async function scrapeAndSeed(){
    await scrape();

    connectDatabase();
    
    const seedProducts= async ()=>{
        try{        
    
            await Product.deleteMany();
            console.log('products deleted');
            await Product.insertMany(products);
            console.log('inserted all products');
            process.exit();
        }catch(error){
            console.log(error.message);
            process.exit();
        }
    }
    
    await seedProducts();
    
}

scrapeAndSeed();



