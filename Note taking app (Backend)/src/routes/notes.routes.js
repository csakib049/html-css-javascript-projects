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


const authMiddleware = require("../middlewares/auth.middleware");

//routes
router.get("/test", testAllNotes);

router.get("/", authMiddleware, getAllNotes);
router.get("/:id", getSingleNote);                                 
router.post("/", authMiddleware, createNoteValidator, validate, createNote);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);



module.exports = router;