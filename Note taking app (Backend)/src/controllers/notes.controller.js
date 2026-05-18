//notes.controller.js

const ApiError = require("../errors/ApiError");
const Note = require("../models/note.model")
const asyncHandler = require("../utils/asyncHandler")


const deleteNote = asyncHandler(async (req, res, next) => {


    const noteId = req.params.id;

    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote) {
        return next(new ApiError(404, "Note not found."))
    }


    res.status(200).json({
        success: true,
        message: "Note deleted successfully."
    })

});

const updateNote = asyncHandler(async (req, res, next) => {


    const noteId = req.params.id;




    const updatedNote = await Note.findByIdAndUpdate(
        noteId,
        req.body,
        {
            new: true, // it makes sure mongodb could return freshly update value
            runValidators: true, // it makes sure that the updated values are following mongodb schema 
        }
    );


    if (!updatedNote) {
        return next(new ApiError(404, "Note not found."))
    }
    

    res.status(200).json({
        success: true,
        message: "Note updated successfully.",
        data: updatedNote
    })

});

const getSingleNote = asyncHandler(async (req, res, next) => {


    const noteId = req.params.id;

    const note = await Note.findById(noteId);

    if (!note) {
        return next(new ApiError(404, "Note not found."))
    }

    res.status(200).json({
        success: true,
        data: note
    })


});





const getAllNotes = asyncHandler(async (req, res) => {


    const notes = await Note.find();

    res.status(200).json({
        success: true,
        count: notes.length,
        data: notes
    });

});

const testAllNotes = asyncHandler(async (req, res) => {
    res.send("Testing Notes routes .")
});

const createNote = asyncHandler(async (req, res) => {

    const { title, content } = req.body;

    const newNote = await Note.create({
        title,
        content,
    });

    res.status(201).json({
        success: true,
        message: "Note created successfully. ",
        data: newNote,
    })

});



module.exports = {
    getAllNotes,
    testAllNotes,
    createNote,
    getSingleNote,
    updateNote,
    deleteNote
}; 