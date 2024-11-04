const Product = require("../models/product.models");

const getAllProducts = async (req,res)=>{
    const myData = await Product.find({})
    res.status(200).json({myData});
};
const getAllProductsTesting = async (req,res)=>{
    const myData = await Product.find({name: "Iphone"})
    res.status(200).json({myData});
};

module.exports = {getAllProducts,getAllProductsTesting};