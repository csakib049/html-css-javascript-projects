const http = require("http");

http.createServer((req,res)=>{
   res.write("this is sakib");
   res.write("<h1>Hi Sakib</h1>");
   res.end("hello");
}).listen(4800);