const Employee=require('./Employee');

const _subject=Symbol('subject');


class Teacher extends Employee{

    constructor(id,name,subject){
        super(id,name);
        this[_subject] = subject;
    }


    get subject(){
        return this[_subject];
    }

    set subject(subject){
        this[_subject]= subject;
    }


    toString(){
        
        return `${super.toString()},Subject: ${this[_subject]}`;
    }

}


modeule.exports=Teacher;