interface Person{
    name:string;
    greet():string;
}

let user:Person={
    name:"sakib",
    greet(){
        return "hello "+this.name;
    }
}

console.log(user.greet());
