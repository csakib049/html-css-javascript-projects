const Person= require("./Person");

const _subjects=Symbol('subjects');
const _fee=Symbol('fee');


class Student extends Person{
    constructor(name,email,subjects,fee){
        super(name,email); 
        // super calls the constructor of the parent class
       /*
       When you use extends, you MUST call super() before using this in the child constructor. It basically runs the parent's constructor first.
       */ 
        this[_subjects]=subjects;
        this[_fee]=fee;
    }


    get subjects(){
        return this[_subjects];
    }

    set subjects(subjects){
        this[_subjects] = subjects;
    }

    get fee(){
        return this[_fee];
    }

    set fee(fee){
        this[_fee] = fee;
    }
}


module.exports=Student;