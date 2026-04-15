const express = require('express');
const authRoutes = require("./routes/auth.routes");
const cookieParser=require("cookie-parser");
const postRoutes = require("./routes/post.routes");


const app=express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
/*
The Route Prefix ("/api/auth")

-->You are telling Express that any incoming request that starts with http://localhost:5000/api/auth should be handed over to the authRoutes file.

    If authRoutes has a login route defined as /login, the full URL becomes: /api/auth/login.

    If it has a signup route as /signup, the full URL is: /api/auth/signup.
 */

 app.use("/api/posts",postRoutes);

module.exports=app;