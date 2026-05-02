const express=require('express');
const authController = require("../controllers/auth.controller");

const router = express.Router();//Instead of writing hundreds of routes in one single index.js file, you can create separate files (e.g., userRoutes.js, productRoutes.js) to keep your code clean.


// Post    /api/auth/register  
router.post("/register",authController.registerUser)




module.exports = router;