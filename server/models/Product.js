const mongoose = require ('mongoose');


const productSchema=mongoose.Schema({
    name :{
        type:String,
        required:[true,'Please enter product name!'],
        trim:true,
        maxLenght:[100,'Product name cannot exeed 100 charcters!']
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:[true,'Please enter product price!'],
        maxLenght:[6,'Product name cannot exeed 5 charcters!'],
        default:0.0
    }
})


module.exports =mongoose.model('Product',productSchema);