const UniPerson = require('./UniPerson');

const _employeeID=Symbol('employeeID');
const _salary=Symbol('salary');


class Employee extends UniPerson{
    constructor(id,name,employeeID,guardian,exams,salary){
      super(id,name);
      this[_employeeID]=employeeID;
      this[_salary]=null;
    }


    get employeeID(){
        return this[_employeeID];
    }


    get salary(){
        return this[_salary];
    }

    set salary(salary){
        this[_salary]=salary;
    }

    toString(){
        
        return`${super.toString()} EmployeeID=${this[_employeeID]} , Salary = ${this[_salary]}`;        
    }
}

modeule.exports=Employee;