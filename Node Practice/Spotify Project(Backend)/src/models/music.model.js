const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",  //This ID belongs to the user collection/model
        required: true,
    }
})



const musicModel=mongoose.model("music",musicSchema);


module.exports = musicModel;