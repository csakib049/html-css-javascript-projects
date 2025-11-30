const http = require('http');

const userData=[
    { name:"sakib", age:24},
    { name:"sakibbbb", age:2445},
    { name:"sakibaaa", age:24345},
]

http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/JSON");
    res.write(JSON.stringify(userData)); 
    // convirts the object array into JSON string 
    res.end();

}).listen(4100);


//  **Description :  this is a server / Api so its sending data to the 
//  client  thats why its convirting the js object --> JSON srting 
//  (because api's always sends JSON file)

