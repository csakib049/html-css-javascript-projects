const mongoose = require("mongoose");

async function connectDB(){
    try{

        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database connected Successfully ");
        

    }catch(error){
        console.log("Database connected Failed . ");
        console.log(error);
    }
    
}


module.exports = connectDB;