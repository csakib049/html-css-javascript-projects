const http= require('http');
const fs= require('fs');
const queryString= require('querystring');

http.createServer((req,resp)=>{

   fs.readFile('html/web.html','utf-8',(error,data)=>{
      
         
         if(error){
            resp.writeHead(500,{"content-type":'text/plain'});
            resp.end("internal server error");
            return;
         }

         resp.writeHead(200,{"content-type":"text/html"});
         if(req.url=='/'){
            resp.write(data);
         }else if(req.url=='/submit'){

            let dataBody = [];
            req.on('data',(chunk)=>{
               dataBody.push(chunk);
            });
            req.on('end',()=>{
               let rawData = Buffer.concat(dataBody).toString();
               let readableData = queryString.parse(rawData);
               console.log(readableData);
            });
            
            resp.write('<h1>Data submit</h1>');
         }
         resp.end();
   })


   
}).listen(3200);