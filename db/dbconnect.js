const mongoose = require("mongoose");

const connecteDB = (url)=>{
    console.log("Connected to DB");
    return mongoose.connect(url);
}

module.exports = connecteDB;