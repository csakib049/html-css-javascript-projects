/*
Symbol() in JavaScript
Symbol is a primitive data type introduced in ES6. Every symbol is guaranteed to be unique, even if two symbols have the same description.
*/

const _name=Symbol('name');
const _email=Symbol('email');


class Person{

    constructor(name,email){

        this[_name]=name;
        this[_email]=email;               
    }


    get name(){
        return this[_name];
    }

    set name(name){
       this[_name]=name;
    }

    
    get email(){
        return this[_email];
    }

    set email(email){
        this[_email]=email;
    }

}

module.exports=Person;