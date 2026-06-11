const express = require("express");
const postController = require("../controllers/post.controller");
const router = express.Router();

//         /api/posts/create
router.post("/create", postController.postUser);



module.exports = router;