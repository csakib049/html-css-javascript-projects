// const http = require('http');

// http.createServer((req,res)=>{
     
//      res.write("<h1> hello sakib </h1>");
//      res.end("hello");// ending the server is compulsory 
// }).listen(4800);


const http = require('http');

http.createServer((req,res)=>{

    res.write("<h1>is it working ......???</h1>");
    res.end();
}).listen(4800);