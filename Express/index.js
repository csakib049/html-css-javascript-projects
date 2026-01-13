import express from 'express'
const app=express();

app.get('/',(req,resp)=>{
    resp.send('<h1>This is home page.</h1>');
});
app.get('/about',(req,resp)=>{
    resp.send1('<h1>This is about page.</h1>');
});
app.get('/error',(req,resp)=>{
    resp.send('<h1>This is error page.</h1>');
});



function errorHandling(error,req,resp,next){
    resp.status(error.status||500).send("Try this after some time");
}

app.use(errorHandling);




app.listen(3200);