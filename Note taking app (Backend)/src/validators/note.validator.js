const {body} = require("express-validator");


const createNoteValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required.")
        .isString()
        .withMessage("Title must be String.")
        .isLength({ min: 3 })
        .withMessage("Title must be at least 3 words."),



    body("content")
        .trim()
        .notEmpty()
        .withMessage("Content is required.")
        .isString()
        .withMessage("Content must be String.")
        .isLength({ min: 5 })
        .withMessage("Content must be at least 5 words.")

];


module.exports = { createNoteValidator };