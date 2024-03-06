import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

import userRouter from './routes/UserRoute.js';
import authRouter from './routes/AuthRoute.js';
import listingRouter from './routes/ListingRoute.js';

import path from 'path';

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB!!");
}).catch((err)=>{
    console.log(err);
});

//deploy
const __dirname=path.resolve();

const app=express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
    console.log('Server is running on port 3000!!');
});


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

//deploy
app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})

//Middlewares
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});