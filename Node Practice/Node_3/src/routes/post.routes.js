const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const router = express.Router();

//         /api/posts/create
router.post("/create", async (req, res) => {


    const token = req.cookies.token;
    //if the user has token then he is loggedin if not then he is not loggedin 



    if (!token) {
        res.status(401).json({
            message: "Unauthorized"  //401 = Unauthorized, the user is not allowed to do any work.
        })
    }


    try {

        //decoded = the original data inside the token 
        //inside decoded there is a user details named id 
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //Check this token using secret key — is it real or fake? this is used so no hacker can create a fake token and use that token to post in users profile 

        const user = await userModel.findOne({
            _id: decoded.id
        })

        console.log(user);

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"  //wrong token 
        })
    }






    res.send("post created successfully")
})



module.exports = router;