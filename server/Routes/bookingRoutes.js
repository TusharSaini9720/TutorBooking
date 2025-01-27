const express = require('express');
const bookingcontroller=require('./../controller/bookingcontroller');
const authController = require('./../controller/authController');
const bookingRoutes=express.Router();

bookingRoutes.post('/checkout-session/:courseid',authController.protect,bookingcontroller.getcheckoutSession);


module.exports=bookingRoutes;