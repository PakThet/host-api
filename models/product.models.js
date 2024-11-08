const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: [true, "price must be provided"]
    },
    featured:{
        type:Boolean,
        default: true
    },
    rating:{
        type: Number,
        default: 3.5
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
            values: ["apple","sumsung","dell","mi"],
            message: `{VALUE} is not supported`
        }
    }
});


module.exports = mongoose.model("Product", productSchema);