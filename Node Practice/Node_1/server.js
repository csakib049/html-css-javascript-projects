const app = require("./src/app.js");
const connectDB = require("./src/db/db.js");




connectDB() //calling connectDB to connect the server to database 


//start server 
app.listen(3000,()=>{ 
    console.log("server is running on 3000");
});