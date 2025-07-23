import express from 'express';
import {placeOrder,placeOrderRazorpay,placeOrderStripe,userOrder,updatestatus,allOrder} from '../controller/ordercontroller.js'
import adminAuth from '../middleware/AdminAuth.js';
import authuser from '../middleware/auth.js';
const orderRouter =express.Router();
//admin ffeatures
orderRouter.post('/list' ,adminAuth, allOrder);
orderRouter.post('/status' ,adminAuth, updatestatus);

//payment features

orderRouter.post('/place',authuser,placeOrder);
orderRouter.post('/stripe',authuser,placeOrderStripe);
orderRouter.post('/razory',authuser,placeOrderRazorpay);

//user feature
orderRouter.post('/userorder',authuser,userOrder);


export default orderRouter;
