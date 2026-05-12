import mongoose from "mongoose";
import config from "./config.js ";

async function connectDB() {
    try{
        await mongoose.connect(config.MONGO_URI)

        console.log("DataBase connected successfully");
        
    }catch(err){
        console.log("DataBase connection failed",err);
        
    }
    
}


export default connectDB;