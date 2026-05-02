require('dotenv').config(); //to load environment variables from a .env file into our application.
const app=require('./src/app');
const connecDB=require('./src/db/db');


connecDB();


app.listen(3000,()=>{
    console.log("server is running at 3000");
});