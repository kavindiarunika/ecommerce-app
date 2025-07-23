import express from 'express';

import {addTocart,updatecart,getcart} from '../controller/cartcontroller.js'


const cartRouter = express.Router();
cartRouter.post('/get' , getcart);
cartRouter.post('/add' , addTocart);
cartRouter.post('/update' , updatecart);


export default cartRouter;