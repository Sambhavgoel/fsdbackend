import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db";


dotenv.config();
const app=express();
app.use(express.json());


connectDB()
const PORT=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("Hello World!!");
})
app.listen(PORT, ()=>{
    console.log("app is running on 6700");
})

