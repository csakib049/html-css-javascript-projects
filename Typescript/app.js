"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "sagol ";
    }
}
let u1 = new User("sakib");
u1.changeName();
console.log(u1.name);
//# sourceMappingURL=app.js.map