// Import Model
const express = require("express")
const Orders = require("../models/orders")
// Function add and export
exports.Orders = async(req, res) => {
    try{
        const Order = await Order.find();
        res.json(Order);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};


// Function get all data and export
exports.Ordersname = async (req, res) => {
    try {
        const { id } = req.params;
        const Orders = await Orders.findById(id);
        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function Post data by genre and export
exports.addOrders = async (req, res) => {
    try {
        const { customer_name, product, quantity, order_date, status,  } = req.body;
        const newOrders = new tool({ customer_name, product, quantity, order_date, status,  }); 
        const savedOrders = await newOrders.save(); 
        res.status(201).json(savedOrders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//GET


// Function update and export
exports.updateOrders = async (req, res) => {
    try {
        const { id } = req.params;
        const Orders = await Orders.findById(id);
        if (!Orders) return res.status(404).json({ message: 'Orders not found' });
        const update = req.body;
        Object.assign(Orders, update);
        const updateOrders = await Orders.save();
        res.json(updateOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function delete and export
exports.deleteOrders = async (req, res) => {
    try {
        const { id } = req.params;
        const Orders = await Orders.findById(id);
        if (!Orders) return res.status(404).json({ message: 'Orders not found' });
        await Orders.findByIdAndDelete(id);
        res.json({ message: 'Orders deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};