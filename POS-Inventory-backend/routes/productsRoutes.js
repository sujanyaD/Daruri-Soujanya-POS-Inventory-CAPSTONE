// const { Router } = require('express');

const express=require("express");
const router=express.Router();
const productController=require('../controllers/productsControllers');




// GET all users
router.get('/products',productController.getAllProducts);

//POST New product products
router.post('/addproduct',productController.addNewProduct);

//Edit new product
router.put('/editproduct',productController.editProduct);
//Delete product
router.delete('/deleteproduct',productController.deleteProduct);

module.exports = router;
