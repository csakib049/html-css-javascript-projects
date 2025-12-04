const http = require('http');
http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");

    console.log(req.url);

    if(req.url=='/loin'){
        res.write("<h1> login page</h1>");
    }
    
    res.end();
}).listen(5600);