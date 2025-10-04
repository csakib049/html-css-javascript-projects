
        let display_box=document.querySelector(".display_box");
        let icon1=document.querySelector(".icon1");
        let icon2=document.querySelector(".icon2");
        let icon3=document.querySelector(".icon3");


        let cnt=0;

        icon1.addEventListener("click",()=>{
            cnt++;
            display_box.innerText=cnt;
        });

        icon2.addEventListener("click",()=>{
            if(cnt>0){
               cnt--;
               display_box.innerText=cnt;
            }
            
        });

        icon3.addEventListener("click",()=>{
            cnt=0;
            display_box.innerText=cnt;
        });
