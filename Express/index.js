import express from 'express';
import path from 'path';

const app = express();  // convirts express function into an object 

app.get('/',(req,resp)=>{
    const abspath = path.resolve('view','home.html');
    resp.sendFile(abspath);
});

app.get('/about',(req,resp)=>{
    const abspath = path.resolve('view','about.html');
    resp.sendFile(abspath);
});

app.get('/login',(req,resp)=>{
    const abspath = path.resolve('view','login.html');
    resp.sendFile(abspath);
});

app.listen(3200);