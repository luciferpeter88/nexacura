/* This code snippet is setting up a configuration for handling file uploads using the `multer` library
in a Node.js application. Here's a breakdown of what each part of the code is doing: */
const multer = require("multer");
const path = require("path");
const DynamicFolderCreator = require("../utilities/DynamicFolderCreator");
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    const dynamicFolder = new DynamicFolderCreator(request, "pictures");
    const folderPath = dynamicFolder.createFolder();
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-segg" + file.originalname);
  },
});

module.exports = multer({ storage: storage });
