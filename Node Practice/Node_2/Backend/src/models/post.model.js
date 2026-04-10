const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,      //image's link 
    caption: String,
})



const postModel = mongoose.model("post", postSchema);
/* "post" → Mongoose will automatically convert this into a 
 collection name:posts (plural) inside MongoDB */



module.exports = postModel;