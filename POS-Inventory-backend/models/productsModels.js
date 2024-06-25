const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: true,
        },
        ProductPrice: {
            type: Number,
            required: true,
        },
        ProductCatogry: {
            type: String,
            required: true,
        },
        Imagepath:{
            type: String,
            required: true,

        }
    },
    {timestamps:true}
    );

const products = mongoose.model('products', ProductSchema)
module.exports = products;