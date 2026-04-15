const mongoose=require('mongoose');


async function connectDB(){
    try{
      await mongoose.connect(process.env.MONGO_URI);

      console.log("DataBase is connected successfully");
      

    }catch(err){
      console.log("Database connection error:",err);
    }
}


module.exports=connectDB;