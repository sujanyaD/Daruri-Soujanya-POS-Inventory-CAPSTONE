const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: false,
        },
        ProductPrice: {
            type: Number,
            required: false,
        },
        ProductCatogry: {
            type: String,
            required: false,
        },
        Imagepath:{
            type: String,
            required: false,

        }
    },
    {timestamps:true}
    );

const products = mongoose.model('products', ProductSchema)
module.exports = products;