const express = require("express");
const musicController = require('../controllers/music.controller');
const multer = require('multer');
const authMiddleware = require("../middlewares/auth.middleware");


const upload = multer({
    storage:multer.memoryStorage()
})


const router= express.Router();



router.post("/upload",authMiddleware.authArtist,upload.single("music") ,musicController.createMusic);

router.post("/album",authMiddleware.authArtist,musicController.createAlbum)

router.get("/",authMiddleware.authUser,musicController.getAllMusic)

router.get("/albums",authMiddleware.authUser,musicController.getAllAlbum)

router.get("/albums/:albumId",authMiddleware.authUser,musicController.getAlbumById)




module.exports=router;

 