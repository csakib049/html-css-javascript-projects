
function getName():Promise<string>{
    return new Promise((resolve,reject)=>{
        resolve("sakib");
    })
}


console.log(getName());


console.log(typeof getName());
