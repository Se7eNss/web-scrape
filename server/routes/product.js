const express = require('express');
const router = express.Router();

const {getProducts,getSingleProduct} =require ('../controllers/productController');


router.route('/').get(getProducts);
router.route('/:id').get(getSingleProduct);

module.exports = router