
//access of all buttons
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
let btn6=document.querySelector(".btn6");
let btn7=document.querySelector(".btn7");
let btn8=document.querySelector(".btn8");
let btn9=document.querySelector(".btn9");

// access of full body 
let fullbody=document.querySelector(".fullbody");


btn1.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-emerald-400");
     btn1.classList.toggle("text-white");
});


btn2.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-red-400");
     btn2.classList.toggle("text-white");
});
btn3.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-orange-400");
     btn3.classList.toggle("text-white");
});
btn4.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-indigo-400");
     btn4.classList.toggle("text-white");
});
btn5.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-purple-400");
     btn5.classList.toggle("text-white");
});
btn6.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-fuchsia-400");
     btn6.classList.toggle("text-white");
});
btn7.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-pink-400");
     btn7.classList.toggle("text-white");
});
btn8.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-rose-400");
     btn8.classList.toggle("text-white");
});
btn9.addEventListener("click",()=>{
     fullbody.classList.toggle("bg-sky-300");
     fullbody.classList.toggle("bg-cyan-400");
     btn9.classList.toggle("text-white");
});


