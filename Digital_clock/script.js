let hours=document.querySelector(".Hours");
let minutes=document.querySelector(".Minutes");
let seconds=document.querySelector(".Seconds");


let cnt=0;
let timer=setInterval(()=>{
    let now = new Date();

    hours.innerText=` ${now.getHours()} : `;
    minutes.innerText=`${now.getMinutes()} : `;
    seconds.innerText=`${now.getSeconds()} `;



    //to stop the time after 5 min (300 seconds)
    cnt++;
    if(cnt==300){
        clearInterval(timer);
    }

    


},1000);