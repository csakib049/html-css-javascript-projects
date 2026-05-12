require('dotenv').config();
const app = require("./src/app");
const mongoose = require("mongoose");
const connectDB= require("./db/db");





const PORT = 3000;


app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})