const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/auth.contriller");


router.post("/register",registerUser);

module.exports = router;

