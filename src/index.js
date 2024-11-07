import dotenv from 'dotenv';


import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";



dotenv.config({ path: './env' });
connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => console.log("Mongodb connection error",err))   


/*
//connection to the database of mongoose
import express from "express";
const app = express();

( async ()=> {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       //listen for errors
        app.on("error", (err) => {
            console.log(err)
            throw err
        })
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`)
        })
    } catch(error){
        console.log(error)
        throw err
    }
})() //immediately invoke function*/