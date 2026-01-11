import express from 'express';
const app = express();

app.use((req,resp,next)=>{
   console.log("user is accessing "+req.url+" page");
   next();
});


app.get('/',(req,resp)=>{
    resp.send("This is home page . ");
});
app.get('/about',(req,resp)=>{
    resp.send("This is about page . ");
});
app.get('/contact',(req,resp)=>{
    resp.send("This is contact page . ");
});


app.listen(3200);