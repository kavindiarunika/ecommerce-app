import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import 'dotenv/config';

import userRouter from './routes/userRoute.js';
import productrouter from './routes/productroute.js';
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/orderRoutes.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB();


// Middleware
app.use(cors());
app.use(express.json());



app.use('/api/user',userRouter)
app.use('/api/product' , productrouter)
app.use('/api/cart',cartRouter);
app.use('api/order' , orderRouter)

// Default route
app.get('/', (req, res) => {
  res.send("API working");
});

// Start server
app.listen(port, () => {
  console.log("Server starting on port: " + port);
});
