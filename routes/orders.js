const express = require('express');

const{Orders,Ordersname,addOrders,updateOrders,deleteOrders }
= require('../controllers/orderController');

// APIs Routing Config
const router = express.Router();
router.get('/Orders', Orders);
router.get('/Ordersname', Ordersname);
router.post('/addOrders', addOrders);
router.put('/updateOrders/:id', updateOrders);
router.delete('/deleteOrders/:id', deleteOrders);
// Export router
module.exports = router;





