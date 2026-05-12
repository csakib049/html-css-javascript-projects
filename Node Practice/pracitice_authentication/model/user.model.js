const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true
    },
    age:Number
});



const User = mongoose.model('user',userSchema);


module.exports = User;

