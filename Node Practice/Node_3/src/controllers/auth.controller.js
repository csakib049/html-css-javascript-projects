const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


async function registerUser(req, res) {
    const { username, email, password } = req.body;


    //this funciton checks if the user already exixts based on the unique email
    const isUserAlreadyExists=await userModel.findOne({
        email
    })


    // 409 --> conflict {User already exists}
    if (isUserAlreadyExists){
        return res.status(409).json({
            message:"User already exists"
        })
    }


    const user = await userModel.create({
        username,email,password
    })



//jwt.sign():This function creates a unique (the token) for the user.
    const token =jwt.sign({
        id:user._id//This is the data you want to "encode" into the token. By storing the user's unique ID here, the server will know exactly who owns this token when they send it back later.
    },process.env.JWT_SECRET)  //(process.env.JWT_SECRET): This is a private key stored in your environment variables. Think of it as a digital wax seal. Only your server knows this secret, which prevents hackers from creating their own valid tokens.


    //           "key",value
    res.cookie("token",token) //"Hey, take this secret token and store it in user's browser 'cookie jar' automatically." 

    res.status(201).json({
        message:"User registered successfully",
        user,
        
    })
}


module.exports = { registerUser }