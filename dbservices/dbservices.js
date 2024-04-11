const database = require('../config/dbConfig');
const {Sequelize} = require('sequelize');
const { Op } = require('sequelize');
const Product =  database.products;

const productInfo = async ({productName, regularPrice, offerPrice, offerStartDate, offerEndDate}) => {
    try{
        const info = await Product.create({productName, regularPrice, offerPrice, offerStartDate, offerEndDate});
        return info;
    }catch (err){
        return  err;
    }
}

const getAllProducts = async () => {
    try{
        const products = await Product.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }, 
            attributes: ['productName', 'regularPrice', 'offerPrice', 'offerStartDate', 'offerEndDate', [Sequelize.literal('CASE WHEN offerStartDate <= CURRENT_DATE() AND offerEndDate >= CURRENT_DATE() THEN offerPrice ELSE regularPrice END'), 'currentPrice']]
        });
    
        return products;
        
    } catch(error) {
        return  error;
    }
}
module.exports = {productInfo,getAllProducts};