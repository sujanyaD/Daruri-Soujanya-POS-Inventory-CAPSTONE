// const { Router } = require('express');

const express=require("express");
const router=express.Router();
const productController=require('../controllers/productsControllers');




// GET all users
router.get('/products',productController.getAllProducts);

//POST New product products
router.post('/add-product',productController.updateProduct);

//Edit new product
router.put('/edit-product',productController.editProduct);
//Delete product
router.delete('/detete-product',productController.deleteProduct);

module.exports = router;
