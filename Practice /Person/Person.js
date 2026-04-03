const _id=Symbol('id');
const _name=Symbol('name');
const _blood=Symbol('blood');
const _contact=Symbol('contact');


class Person{
   constructor(id,name){
        this[_id]=id;   
        this[_name]=name;   
        this[_blood]=null;   
        this[_contact]=null;   
   }


   get id(){
     return this[_id];
   }

   set id(id){
    this[_id]=id;
   }

   get name(){
     return this[_name];
   }

   set name(name){
    this[_name]=name;
   }

   get blood(){
     return this[_blood];
   }

   set blood(blood){
    this[_blood]=blood;
   }

   get contact(){
     return this[_contact];
   }

   set contact(contact){
     this[_contact]=contact;
   }


   toString(){
    return `${this[_id]} - ${this[_name]}`;
   }

   

}


module.exports=Person;