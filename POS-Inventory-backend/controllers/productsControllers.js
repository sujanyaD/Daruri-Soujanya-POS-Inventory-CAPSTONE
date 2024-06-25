
const { default: mongoose } = require('mongoose');
const productsModel = require('../models/productsModels.js');
//Get Items
const getAllProducts = async (req, res) => {
    console.log("get all products");
   try{
    const products= await productsModel.find();
    res.json(products);

    // res.status(200).send(products);
   }catch(error){
    console.log(error);
   }
  };
  //add new products
  const addNewProduct= async (req,res)=>{
    try{
        const newProduct= new productsModel(req.body);
        await newProduct.save();
        res.status(201).send("New Product added Sucessfully");
    }catch(error){
        // res.status(400).send("error",error);
        console.log(error);
    }
  };

  // Update existing product 
const updateProduct = async (req, res) => {
    try {
        const productId = req.query.id;
        const updateData  = req.body;
        console.log(productId);
        const updatedProduct = await productsModel.findOneAndUpdate({ _id: productId }, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(400).send("Error updating product");
    }
};
  // Delete product
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.query;
        console.log(productId._id);
        const deletedProduct = await productsModel.findOneAndDelete({ _id: productId});
        // console.log("deletedProduct",deletedProduct.value);
        if (!deletedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json("Product deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(400).send("Error deleting product");
    }
};


  module.exports = {  getAllProducts,updateProduct,deleteProduct,addNewProduct};
