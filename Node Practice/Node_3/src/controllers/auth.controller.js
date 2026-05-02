const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken"); //In simple terms, JWT is used to verify who a user is. It acts like a digital ID card that a server gives to a user after they log in.


async function registerUser(req, res) {
    const { username, email, password } = req.body;
    /*This data comes from the frontend, usually in JSON format.Frontend sends data to backend using a request (POST/PUT) in JSON formate and the backend receives it in req.body
    
    For this to work, you must use middleware in Express: app.use(express.json())  This converts incoming JSON → JavaScript object
    */


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


    //you are creating a new user in your database using Mongoose 
    const user = await userModel.create({ //userModel: This is the schema/blueprint for your user data.
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