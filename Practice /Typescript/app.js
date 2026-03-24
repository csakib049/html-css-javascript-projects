"use strict";
let user = {
    name: "sakib",
    greet() {
        return "hello " + this.name;
    }
};
console.log(user.greet());
