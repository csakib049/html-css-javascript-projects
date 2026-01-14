import express from 'express';
const app= express();

app.get('/',(req,resp)=>{
    const user=['anil','sakib','sam','sidhu'];
    let data=`<ul>`;

    for(let i=0;i<user.length;i++){
        data+=`<li><a href="user/${user[i]}">${user[i]}</a></li>`
        console.log(user[i]);
    }
    data+='</ul>'
    resp.send(data);
});

app.get("/user/:name",(req,resp)=>{
    console.log(req.params.name);
     const userName=req.params.name;
    resp.send(`This is ${userName}'s profile page.`);
});





app.listen(3200);