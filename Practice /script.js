
const a=document.querySelector("h1");

console.log(a);

var flag=0;

a.addEventListener("click",function(){
    if(flag==0){
        console.log("Hi");
        a.innerHTML="off "
        a.style.color="red";
        a.style.backgroundColor="pink";
        flag=1;
    }else{
        console.log("Hi");
        a.innerHTML="on!!!!!!"
        a.style.color="pink";
        a.style.backgroundColor="black";
        flag=0;
    }
});


class parents{
    sakin(){

    }
}

class child extends parents {
    sakin(){
        
    }
}