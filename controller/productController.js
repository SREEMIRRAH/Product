const productService = require('../dbservices/dbservices');
const { products } = require('../config/dbConfig');

const productInfo = async  (req, res) => {
    try {
        const product = await productService.productInfo(req.body);     
        res.status(201).json(product);
    } catch (e) {
        res.status(500).json({message:"Failed to create product."});
        console.error(e);
    };
}

const getAllProducts = async (req,res) => {
    try{
        const product = await productService.getAllProducts();
        res.status(200).json(product);
    }catch (e) {
        res.status(500).json({message:"Failed to list products."});
        console.error(e);
    };
}
module.exports = {productInfo,getAllProducts}