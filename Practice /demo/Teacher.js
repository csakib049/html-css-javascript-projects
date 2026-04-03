const Person=require("./Person");

const _subject=Symbol('subject');
const _salary=Symbol('salary');

class Teacher extends Person{
    constructor(name,email,subject,salary){
        super(name,email);
        // super calls the constructor of the parent class
       /*
       When you use extends, you MUST call super() before using this in the child constructor. It basically runs the parent's constructor first.
       */ 
       this[_subject]=subject;
       this[_salary]=salary;
    }


    get subject(){
        return this[_subject];
    }

    set subject(subject){
        this[_subject] = subject;
    }

    get salary(){
        return this[_salary];
    }

    set salary(salary){
        this[_salary] = salary;
    }
}

module.exports=Teacher;