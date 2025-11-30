const http = require('http');

const userData =[
    {
        name:'sakib',
        age:24,
    },
    {
        name:'shahriar',
        age:22,
    },
    {
        name:'a;sdlkfj',
        age:2188,
    }
]

http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/json')
    res.write(JSON.stringify(userData));
    res.end();
}).listen(6100);