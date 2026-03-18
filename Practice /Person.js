class Person{

    constructor(name,email){

        this._name=name;
        this._email=email;               
    }


    get name(){
        return this._name;
    }

    set name(name){
       this._name=name;
    }

    
    get email(){
        return this._email;
    }

    set email(email){
        this._email=email;
    }

}

module.exports=Person;