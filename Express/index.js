// const express = require('express');

import express from 'express';
import home from './pages/home.js';



const app = express();


app.listen(3200);


app.get("",(req,resp)=>{
    resp.send(home());
});


