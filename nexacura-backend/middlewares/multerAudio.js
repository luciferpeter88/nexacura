/* This code snippet is setting up a file upload configuration using the `multer` library in a Node.js
application. Here's a breakdown of what each part of the code is doing: */
const multer = require("multer");
const path = require("path");
const DynamicFolderCreator = require("../utilities/DynamicFolderCreator");

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    const dynamicFolder = new DynamicFolderCreator(request, "input_audio");
    const folderPath = dynamicFolder.createFolder();
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
