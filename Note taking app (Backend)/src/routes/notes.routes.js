//notes.routes.js

const express = require("express");
const router = express.Router();

const { createNoteValidator } = require("../validators/note.validator");
const validate = require("../middlewares/validate.middleware");


const { getAllNotes,
    testAllNotes,
    createNote,
    getSingleNote,
    updateNote,
    deleteNote
} = require("../controllers/notes.controller");

//routes
router.get("/test", testAllNotes);
router.get("/", getAllNotes);
router.get("/:id", getSingleNote);
router.post("/", createNoteValidator, validate, createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);



module.exports = router;