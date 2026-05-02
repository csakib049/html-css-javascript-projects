const musicModel =require("../models/music.model")
const jwt=require("jsonwebtoken");


async function createMusic(req,res) {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }


    try{
       const decoded =  jwt.verify(token,process.env.JWT_SECRET)

       if(decoded.role!="artist"){
        return res.status(401).json({
            message:"You dont have access to create an music"
        })
       }
    }catch(err){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    
}