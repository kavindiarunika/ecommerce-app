import express from 'express'
import {listProduct , addProduct ,removeProduct ,singleProduct } from '../controller/productcontroller.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/AdminAuth.js';

const productrouter =express.Router();

productrouter.post('/add',adminAuth, upload.fields([{name:'image1' , maxCount:1},{name:'image2' , maxCount:1},{name:'image3' , maxCount:1},{name:'image4' , maxCount:1}]) , addProduct);
productrouter.post('/remove' ,adminAuth, removeProduct);
productrouter.post('/single' , singleProduct);
productrouter.get('/list' , listProduct);

export default productrouter;

