const express = require('express');   //create server 
const noteModel = require('./models/note.model.js');

const app = express();

app.use(express.json()); // middleware Its job is to read JSON data from the request body and convert it into a JavaScript object.


/*
 POST/notes ==>Create note
 Get/notes ==>Get all notes
 Delete/notes/:id ==> Delete notes
 Patch/notes/:id==> Update notes
*/


app.post("/notes", async (req, res) => {
    const data = req.body //{title, description}
    await noteModel.create({
        title: data.title,
        description: data.description
    })


    res.status(201).json({
        message: "Note created successfully !!"
    });
})



app.get("/notes", async (req, res) => {

    //find() will return you an array of object 
    //  findOne() ==>{} or null 
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched successfully ...",
        notes: notes
    })
})



app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })


    res.status(200).json({
        message: "Notes deleted successfully !!!",

    })
})




app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({ _id: id }, { description: description })


       res.status(200).json({
        message: "Notes Updated successfully !!!",

    })

})



module.exports = app;