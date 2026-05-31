function abc(arg:string | number | any ){
    if(typeof arg ==="number"){
        return "number";
    }else if (typeof arg ==="string"){
        return "string";
    }else{
        throw new Error("Pagol hoye geso naki .....")
    }
}


console.log(abc(12));
console.log(abc("sakib"));
console.log(abc(true)); // this will throw an error 