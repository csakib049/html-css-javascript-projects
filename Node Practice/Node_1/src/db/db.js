const mongoose = require('mongoose'); 
// connect server to database 





async function  connectDB(){
    
    await mongoose.connect("mongodb+srv://csakib049_db_user:nb0XF2BQflP7eYbH@cluster0.emxnfqw.mongodb.net/halley"); //halley is the name of the database 

    /*When we try to connect the server to DB . it will connect through the internet.
    We acctually dont know how long it will take to connect the server and DB , 
    we dont know the exact time . Thats why we use await . It means untill the server 
    is connected to the database it will waite (await) . and when we use await 
    we need to put async at the beginning of the funciton . */

    console.log("Connected to DB");
    
}

module.exports=connectDB;