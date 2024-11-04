require("dotenv").config();
const connectDB = require("./db/dbconnect");
const Product = require("./models/product.models");

const ProductJson = require("./products.json");
const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}

start();