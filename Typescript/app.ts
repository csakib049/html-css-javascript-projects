class User{
    constructor(public readonly name:string){}

    changeName(){
        this.name = "sagol ";
    }
}


let u1 = new User("sakib");

u1.changeName();
console.log(u1.name);
