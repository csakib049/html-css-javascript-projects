class Person{

   /* constructor is a special function that runs automatically when you create a 
   new object with new. You don't call it manually — JavaScript calls it for you. */
    constructor(name,email){

        /* p1 and p2 bolte ja bujhay constructor er vitore  e {this} bolte o ak e
         jinish bujahy. This always points the current object  {this.name → p1.name} */

        this.name=name;
        this.email=email;

        console.log(this);
        console.log(name);
        console.log(email);
    }


    ChangeName(name){
       this.name=name; 
    }

    SendEmail(msg){
      console.log("From:",this.email); // this.email it goes to the place where it is invoked and starts searching for email then it goes to the object and finds email 
      console.log("sending mail to ",msg);
      
    }


    print(){
        console.log(this);
    }


}

const p1 = new Person("sakib","sakib@gmail.com");
const p2 = new Person("shahriar","shahriar@gmail.com");
//new is a keyword used to create an object from a class.

p1.SendEmail("Zaman@gmail.com");


p1.ChangeName("Md sakib");
p2.ChangeName("Md shahriar");


p1.print();
p2.print();



