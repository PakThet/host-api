const express = require("express");
const app = express();
const connectDB = require("./db/dbconnect");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const products_route = require("./routes/products.route");

app.get("/",(req,res)=>{
    res.send("Hello I'm from Node API");
})

// middleware or set to router
app.use("/api/products", products_route);
const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} YES I'm connected!!`);
        })
    }catch(error){
        console.log(error);
    }
}

start();