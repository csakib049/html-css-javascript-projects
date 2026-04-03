const Person=require('./Person');

const _department=Symbol('department');
const _account=Symbol('account');

class UniPerson extends Person{

    constructor(id,name,department,account){
       Symbol(id,name);
       this[_department]=null;
       this[_account]=null;
    }


    get department(){
        return this[_department];
    }

    set department(department){
        this[_department]=department;
    }

    get account(){
        return this[_account];
    }

    set account(account){
        this[_account]=account;
    }


    toString(){
        
        return `${super.toString()} ,Department = ${this[_department]},Account = ${this[_account]}  `;
       
    }


}


modeule.exports=UniPerson;