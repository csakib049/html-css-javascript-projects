const http = require('http');

http.createServer((req,res)=>{
    console.log(req.headers.host); // its running in the server not in the browser
    res.write("<h1>Hi sakib </h1>");
    res.end();
}).listen(5600);