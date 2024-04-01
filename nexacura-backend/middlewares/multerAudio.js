const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "uploads/input_audio");
    if (request.session.email) {
      console.log(request.session.email, "multerAudio");
    } else {
      console.log("No email found in request object");
    }
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
