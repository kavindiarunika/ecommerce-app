import express from 'express'
import {loginuser,registeruser ,adiminlogin} from '../controller/useController.js'
import authuser from '../middleware/auth.js';

const userRouter =express.Router();

userRouter.post('/register' ,authuser, registeruser )
userRouter.post('/login' , authuser,loginuser )
userRouter.post('/admin' ,authuser, adiminlogin )

export default userRouter;