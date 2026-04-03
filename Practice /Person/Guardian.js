const Person=require('./Person');

const _profession = Symbol('profession');
const _income = Symbol('income');


class Guardian extends Person{
    constructor(id,name,profession,income){
        super(id,name);
        this[_profession]=profession;
        this[_income]=income;
    }


    get profession(){
        return this[_profession];
    }

    set profession(profession){
        this[_profession]=profession;
    }

    get income(){
        return this[_income];
    }

    set income(income){
        this[_income]=income;
    }


        toString(){
        
        return `${super.toString()}, Profession = ${this[_profession]} ,  Income = ${this[_income]} `;
      
    }


}

modeule.exports=Guardian;