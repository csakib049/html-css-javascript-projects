const express = require("express");
const router = express.Router();

const { registerUser, loginUser,refreshAccessToken } = require("../controllers/auth.contriller");


router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/refresh-token",refreshAccessToken);

module.exports = router;

