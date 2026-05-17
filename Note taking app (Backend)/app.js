//app.js
const dotenv = require("dotenv");
dotenv.config();

const express = require ("express");
const app = express(); 
const notesRoutes= require("./src/routes/notes.routes");
const loggerMiddleware = require("./src/middlewares/logger.middleware")
const errorMiddleware = require("./src/middlewares/error.middleware")


app.use(express.json());//"If client sends JSON,convert it into JavaScript object"
app.use(loggerMiddleware); //logger middleware 


//Routs
app.use("/notes",notesRoutes);


app.use(errorMiddleware); //error middleware 

module.exports = app ;