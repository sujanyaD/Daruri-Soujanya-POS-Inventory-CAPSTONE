const mongoose = require('mongoose');
const ProductSchema = require('./productsModels');
const UserSchema = require('./usersModels'); 


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


const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
