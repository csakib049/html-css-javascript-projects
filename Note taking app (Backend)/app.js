//app.js
const dotenv = require("dotenv");
dotenv.config();

const express = require ("express");
const app = express(); 
const cookieParser = require("cookie-parser");
const notesRoutes= require("./src/routes/notes.routes");
const loggerMiddleware = require("./src/middlewares/logger.middleware")
const errorMiddleware = require("./src/middlewares/error.middleware")
const authRoutes = require("./src/routes/auth.routes");


app.use(express.json());//"If client sends JSON,convert it into JavaScript object"
app.use(loggerMiddleware); //logger middleware 
app.use(cookieParser());// cookie parse middleware


//Routs
app.use("/notes",notesRoutes);
app.use("/api/auth",authRoutes);


app.use(errorMiddleware); //error middleware 

module.exports = app ;