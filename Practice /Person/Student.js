const UniPerson = require('./UniPerson');

const _studentID=Symbol('studentID');
const _guardian=Symbol('guardian');
const _exams=Symbol('exams');
const _fee=Symbol('fee');


class Student extends UniPerson{
    constructor(id,name,studentID,guardian,exams,fee){
      super(id,name);
      this[_studentID]=studentID;
      this[_guardian]=guardian;
      this[_exams]=[];
      this[_fee]=null;
    }


    get studentID(){
        return this[_studentID];
    }

    get guardian(){
        return this[_guardian];
    }

    get exams(){
        return this[_exams];
    }

    set exams(exams){
        this[_exams]=exams;
    }


    addExam(exam){
       this[_exams].push(exam);
    }

    get fee(){
        return this[_fee];
    }

    set fee(fee){
        this[_fee]=fee;
    }

    toString(){
        
        return `${super.toString()} , StudentID=${this[_studentID]}`;
        
    }
}

modeule.exports=Student;