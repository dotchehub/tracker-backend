require('dotenv').config()
const mongoose = require("mongoose")
const {MONGODB_URI} = process.env

const connectToDb = async () =>{
    
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Connected to database")
    } catch (error) {
        console.error("Unable to connect to database", error)
    }
} 

connectToDb();