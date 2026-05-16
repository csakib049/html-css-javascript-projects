//notes.routes.js

const express = require("express");
const router =express.Router();


const {getAllNotes,
    testAllNotes,
    createNote,
    getSingleNotes,
    updateNote,
    deleteNote
}= require("../controllers/notes.controller");

//routes
router.get("/test",testAllNotes);
router.get("/",getAllNotes);
router.get("/:id",getSingleNotes);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);



module.exports=router;