
const { Router } = require('express');
const salesController = require('../controllers/salesControllers');
const router = Router();
// GET all users
router.get('/sales',salesController.getAllSales);

//POST New product products
router.post('/sales-add',salesController.addNewSale);

//Edit new product
router.put('/sales-update',salesController.updateSale);

//Delete sale record
router.delete('/delete-sale',salesController.deleteSale);

module.exports = router;