// we will be creating schema here 

const mongoose = require("mongoose");


/*
database rule: if you want to store something in database , at first 
 you need to tell database how you data will look like .
*/
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})




/*
CRUD operations
create - post()
read - get()
update - patch() 
delete - delete()

in order to do CRUD operations we need to create noteModel
*/

const noteModel = mongoose.model("note", noteSchema);


module.exports = noteModel;