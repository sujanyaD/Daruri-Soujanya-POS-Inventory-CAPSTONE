

const Salesmodel = require('../models/salesModels');

// Get all sales
const getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

// Add new sale
const addNewSale = async (req, res) => {
    try {
        const newSale = new Sale(req.body);
        await newSale.save();
        res.status(201).send("New Sale added successfully");
    } catch (error) {
        console.error(error);
        res.status(400).send("Error adding new sale");
    }
};

// Update existing sale
const updateSale = async (req, res) => {
    try {
        const { saleId } = req.body;
        const updatedSale = await Sale.findOneAndUpdate(
            { _id: saleId },
            req.body,
            { new: true }
        );
        if (!updatedSale) {
            return res.status(404).send("Sale not found");
        }
        res.status(200).json(updatedSale);
    } catch (error) {
        console.error(error);
        res.status(400).send("Error updating sale");
    }
};
// Delete sale
const deleteSale = async (req, res) => {
    try {
        const { saleId } = req.body;
        const deletedSale = await Sale.findOneAndDelete({ _id: saleId });
        if (!deletedSale) {
            return res.status(404).send("Sale not found");
        }
        res.status(200).json("Sale deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(400).send("Error deleting sale");
    }
};
module.exports = { getAllSales, addNewSale, updateSale, deleteSale };