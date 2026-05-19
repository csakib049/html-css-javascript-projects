const express = require("express");
const router = express.Router();

const { registerUser, loginUser, refreshAccessToken, logoutUser } = require("../controllers/auth.contriller");
const authMiddleware = require("../middlewares/auth.middleware");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken);
router.post("/logout",authMiddleware,logoutUser);

module.exports = router;

