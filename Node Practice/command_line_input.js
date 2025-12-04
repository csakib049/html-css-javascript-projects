const { log } = require('console');
const http = require('http');

const arg = process.argv;
const port = arg[2];
http.createServer((req,res)=>{
  res.write(" hi i hope this is working ..... ");
  res.end();
     
}).listen(port);


console.log(`Your server is running on :${port}`);


