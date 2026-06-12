const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken"); //In simple terms, JWT is used to verify who a user is. It acts like a digital ID card that a server gives to a user after they log in.


async function registerUser(req, res) {

    
    const { username, email, password } = req.body;
    /*This data comes from the frontend, usually in JSON format.Frontend sends data to backend using a request (POST/PUT) in JSON formate and the backend receives it in req.body
    
    For this to work, you must use middleware in Express: app.use(express.json())  This converts incoming JSON → JavaScript object
    */


    //this funciton checks if the user already exixts based on the unique email
    const isUserAlreadyExists = await userModel.findOne({
        email
    })


    // 409 --> conflict {User already exists}
    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists"
        })
    }




    //you are creating a new user in your database using Mongoose 
    const user = await userModel.create({ //userModel: This is the schema/blueprint for your user data.
        username, email, password
    })



    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    if(!token){
        return res.status(400).json({
            message:"Unauthorized."
        })
    }



    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);


        //remove this 
        if(!decoded){
            return res.status(401).json({
                message:"Token is not found."
            })
        }


        const user = await userModel.findOne({
            _id:decoded.id
        })
    }catch(err){
        return res.status(401).json({
            message:"Token is invalid."
        })
    }




    


    //           "key",value
    res.cookie("token", token) //"Hey, take this secret token and store it in user's browser 'cookie jar' automatically." 

    
    res.status(201).json({
        message: "User registered successfully",
        user,
    
    })
}


module.exports = { registerUser }







