const http=require('http');

http.createServer((req,res)=>{

    res.write("sakib hi baby ");

    res.end();
}).listen(4800);


