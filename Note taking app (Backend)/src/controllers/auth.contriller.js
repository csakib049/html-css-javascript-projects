const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const asyncHandler = require("../utils/asyncHandler");

const ApiError = require("../errors/ApiError");


const registerUser = asyncHandler(async (req, res) => {


    const { name, email, password } = req.body;


    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return next(new ApiError(400, "User already exists."));
    }


    const hashedPasswrod = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPasswrod
    });


    res.status(201).json({
        success: true,
        message: "User registered successfully.",
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });


})




module.exports={
    registerUser
};