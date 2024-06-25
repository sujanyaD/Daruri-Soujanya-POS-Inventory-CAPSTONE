
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
  //edit product
  const editProduct = async(req,res)=>{
    try{
        const {productId} =req.body;
        console.log(productId);
        await productsModel.findOneAndUpdate({_id:productId},req.body,{
            new:true,
        });
        res.status(201).json("product updated");
    }catch(error){
        res.status(400).send(error);
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
        res.status(400).send("error",error);
        console.log(error);
    }
  };

  // Update existing product 
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const updatedProduct = await productsModel.findOneAndUpdate(
            { _id: productId },
            req.body,
            { new: true }
        );
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
        const { productId } = req.body;
        const deletedProduct = await productsModel.findOneAndDelete({ _id: productId });
        if (!deletedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).json("Product deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(400).send("Error deleting product");
    }
};


  module.exports = {  getAllProducts,updateProduct,deleteProduct,editProduct,addNewProduct};
