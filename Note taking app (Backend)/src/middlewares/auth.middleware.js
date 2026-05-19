const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const asyncHandler = require("../utils/asyncHandler");

const ApiError = require("../errors/ApiError");


const authMiddleware = asyncHandler(async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new ApiError(401, "Unauthorized access."));
    }


    const token = authHeader.split(" ")[1];

    // try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");


        if (!user) {
            return next(new ApiError(401, "User not found"));
        }


        req.user = user;

        next();

    // } catch (error) {
    //     return next(new ApiError(401, "Invalid or expired Token."))
    // }


});


module.exports = authMiddleware;