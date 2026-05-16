//app.js
const dotenv = require("dotenv");
dotenv.config();

const express = require ("express");
const app = express();
const notesRoutes= require("./src/routes/notes.routes");


app.use(express.json());//"If client sends JSON,convert it into JavaScript object"




app.use("/notes",notesRoutes);


module.exports = app ;