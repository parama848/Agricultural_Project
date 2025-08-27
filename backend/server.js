import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './Routes/userRoute.js';
import productRoute from './Routes/productRoute.js';
import paymentRoute from './Routes/PaymentRoute.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/products', productRoute); 
app.use('/api/payment', paymentRoute);

app.get('/', (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server started on PORT: " + port));
