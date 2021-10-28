const express = require('express');
const multer = require('multer');
const types = require('mime-types');
const File = require("../Class/file.class.js");

const router = express.Router();
const {diskStorage} = multer;
let filename = "";
const path = __dirname.replace('routes', 'temp');
const storage = diskStorage({
    destination:path,
    filename: (req, file, fc)=>{
        filename = Date.now()+"."+types.extension(file.mimetype);
        fc("", filename);
    },
});

const fileUpload = multer({
    storage:storage,
})


router.post("/readfile", fileUpload.single("files") ,(req, res)=>{
    const processFile = new File(filename);
    processFile.readData(); 
    const data = processFile.processData(req.body.separator);
    res.status(200).json(data);
});

module.exports = { router };