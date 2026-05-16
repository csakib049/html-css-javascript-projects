//notes.controller.js

const Note = require("../models/note.model")


const deleteNote = async(req,res)=>{
    try{

        const noteId = req.params.id;

        const deletedNote = await Note.findByIdAndDelete(noteId);

        if(!deletedNote){
            return res.status(404).json({
                success: false,
                message:"Note note found . "
            })
        }

        res.status(200).json({
            success:true,
            message:"Note deleted successfully."
        })


    }catch(err){
          res.status(500).json({
            success: false,
            message: "Failed to delete Note."
        })
    }
}

const updateNote = async (req, res) => {
    try {

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
            return res.status(404).json({
                success: false,
                message: "Note not found . "
            })
        }



        res.status(200).json({
            success: true,
            message: "Note updated successfully.",
            data: updatedNote
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update Note."
        })
    }
}

const getSingleNotes = async (req, res) => {
    try {

        const noteId = req.params.id;

        const note = await Note.findById(noteId);

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            })
        }


        res.status(200).json({
            success: true,
            data: note
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch notes"
        })
    }
}

const getAllNotes = async (req, res) => {

    try {
        const notes = await Note.find();

        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch notes"
        })

    }
}

const testAllNotes = (req, res) => {
    res.send("Testing Notes routes .")
}

const createNote = async (req, res) => {
    try {
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
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch notes data . ",
        })
    }

}

module.exports = { 
    getAllNotes, 
    testAllNotes, 
    createNote, 
    getSingleNotes,
    updateNote,
    deleteNote
};