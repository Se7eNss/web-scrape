const Product = require('../models/Product');
const catchAsyncError = require ('../middilewares/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');


//get all products =>  api/v1/

exports.getProducts = catchAsyncError(async(req,res,next)=>{
    const products = await Product.find();

    res.status(200).json({
        products
    })
})

//get one product details  => /api/v1/:id
exports.getSingleProduct =catchAsyncError( async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }
    res.status(200).json({
        product
    })
})