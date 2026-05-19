const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {

    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );
};

const generateReferenceToken = (userId) => {

    return jwt.sign(
        { id: userId },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" }
    )
}



module.exports = {
    generateAccessToken , 
    generateReferenceToken
};

