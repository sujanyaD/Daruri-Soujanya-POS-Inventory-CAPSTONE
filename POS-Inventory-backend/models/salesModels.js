const mongoose = require('mongoose');
const ProductSchema = require('./productsModels');
const UserSchema = require('./usersModels'); // Assuming your ProductSchema is defined in a separate file

// Define a new schema for Sales
const SaleSchema = new mongoose.Schema(
    {
      products:[{
          productId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Product', 
              required: true,
          },
          quantity: {
              type: Number,
              required: true,
          }
      }],
      totalAmount:{
        type:Number,
        required:true
      },
        dateOfSale: {
            type: Date,
            default: Date.now,
        },
        user_id: {
           type: mongoose.Schema.Types.ObjectId, 
           ref: 'User',
           required: true 
          },

    },
    { timestamps: true }
);

// Create and export the Sale model based on SaleSchema
const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
