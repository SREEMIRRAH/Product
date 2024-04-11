const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.post('/addProduct', productController.productInfo)
router.get('/getProducts', productController.getAllProducts);
module.exports = router;