"use strict";
function getName() {
    return new Promise((resolve, reject) => {
        resolve("sakib");
    });
}
console.log(getName());
console.log(typeof getName());
