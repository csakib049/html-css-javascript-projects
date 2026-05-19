const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const asyncHandler = require("../utils/asyncHandler");

const ApiError = require("../errors/ApiError");

const jwt = require("jsonwebtoken");

const { generateAccessToken, generateReferenceToken } = require("../utils/generateTokens");


const registerUser = asyncHandler(async (req, res, next) => {


    const { name, email, password } = req.body;


    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return next(new ApiError(400, "User already exists."));
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
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


const loginUser = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ApiError(401, "Invalid email or password."))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return next(new ApiError(401, "Invalid email or password."))
    }



    const accessToken = generateAccessToken(user._id);

    const refreshToken = generateReferenceToken(user._id);

    user.refreshToken = refreshToken;


    await user.save();

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });


    res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });



});

const refreshAccessToken = asyncHandler(async (req, res, next) => {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return next(new ApiError(401, "Refresh token missing. "));
    }

    const decoded = jwt.verify(
        refreshToken,
        process.env.JWT.REFRESH_SECRET
    );


    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
        return next(new ApiError(401, "Invalid refresh Token."));
    }


    const newAccessToken = generateAccessToken(user._id);


    res.status(200).json({
        success: true,
        accessToken: newAccessToken
    });

});




module.exports = {
    registerUser,
    loginUser,
    refreshAccessToken
};