const UserModel = require("../models/User");
const BaseRoute = require("../routes/Baseroute");
const upload = require("../middlewares/multer");

class User extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", upload.single("image"), async (request, response) => {
      const { email, name, profession, bio } = request.body;
      let updateObj = {
        name,
        profession,
        bio,
      };

      // If an image file is uploaded, add the image path to the update object
      if (request.file) {
        const imagePath = `http://localhost:4000/${request.file.filename}`;
        updateObj.image = imagePath;
      }

      try {
        const updatedUser = await UserModel.findOneAndUpdate(
          { email: email }, // find a document by email
          { $set: updateObj }, // dynamically constructed fields to update
          { new: true } // option to return the updated document
        );

        if (updatedUser) {
          response.json({
            message: "User data updated successfully",
            user: updatedUser,
          });
        } else {
          response.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Error updating user data" });
      }
    });
  }
}

module.exports = User;
