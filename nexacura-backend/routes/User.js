const UserModel = require("../models/User");
const BaseRoute = require("../routes/Baseroute");

class User extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", async (request, response) => {
      const { email, name, image, profession, bio } = request.body;
      try {
        const updatedUser = await UserModel.findOneAndUpdate(
          { email: email }, // find a document by email
          { $set: { name, image, profession, bio } }, // fields to update
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
