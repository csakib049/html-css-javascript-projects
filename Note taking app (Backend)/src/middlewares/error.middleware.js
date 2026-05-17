//error.middleware.js


const errorMiddleware = (err, req, res, next) => {

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal server error",
    });

};


module.exports = errorMiddleware;




