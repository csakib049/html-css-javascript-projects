const mongoose = require('mongoose');

// This is the Schema (the blueprint)
const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true //every email should be unique 
    },
    password: String
})


const userModel = mongoose.model("user", userSchema);
/*This line creates a Model in Mongoose."user" → Model name ,userSchema → structure of your data . 
"The line Create a model  called user using this schema in Mongoose”


Even though you wrote "user" The MongoDB collection name becomes: "users" which is te collection

*/

module.exports = userModel;