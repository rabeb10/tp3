const express = require('express');
const{registerUser,loginUser}=require('../controllers/orderController');
const router=express.Router();
router.get('/',orderController.getAllOrders);
router.post('/register',orderController.registerOrder);
module.exports=router;