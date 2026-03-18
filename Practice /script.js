const Person=require('./Person');
const Teacher=require('./Teacher');
const Student=require('./Student');




const p=new Person("md sakib","csakib049@gmail.com");

// Teacher is a person so its a is a relationship
const t=new Teacher("sakib sir","sakibsir@gmail.com","computer fundamental",20000);

// Student is a person so its a is a relationship
const s=new Student("sakib chowdhury", "csakib049@gmail.com",["computer 101","Physics","Math"],400000);



console.log(p);
console.log(t);
console.log(s);


