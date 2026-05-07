const express = require("express");
const validationRules = require("./middlewares/validation.middleware");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.post(
  "/register",
  validationRules.registerUserValidationRules(),
  (req, res) => {
    const { username, email, password } = req.body;

    // Example response
    res.json({
      message: "User registered successfully",
      data: { username, email },
    });
  }
);

module.exports = app;
