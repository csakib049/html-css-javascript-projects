// function api(){
//     return new Promise((res,rej)=>{
//           setTimeout(()=>{
//             console.log("weather data");
//             res(2);
//           },2000);
//     });
// }

// async function getdata(){
//     await api();
// }

// getdata();


function api(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("weather data");
            res(2);
        },2000);
    });
}

async function getdata(){
    await api();
    
}

getdata();


//when i am calling the getData() funciton , inside the funciton there is another funcito called api(); the api() the await tells teh function getdata , " bro waite for 2 seconds i have called the function api() it should have send me promise . so please waite for 2 sec untill the promise gets rsolve or reject ."