// const env = require('dotenv');
// const express = require("express");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
connectDB();
//rest object
const app = express();


// ✅ Middleware to parse JSON
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes
app.use('/api/v1/test',testRoutes);

const PORT = process.env.PORT||8040;

// app.get('/',(req,res)=>{
//     res.send("<h1>hellowe wke ew</h1>");
// });
app.listen(PORT,console.log(`server is running on:${PORT}`));