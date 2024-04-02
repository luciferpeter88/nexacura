const fs = require("fs");
const path = require("path");

class DynamicFolderCreator {
  constructor(request, folder) {
    this.request = request;
    this.uploadsPath = `uploads/${folder}`; // Base uploads path
  }

  // Method to create the dynamic folder
  createFolder() {
    let dynamicFolder;
    let folderPath;
    console.log(this.request.session.user, "session data");
    // Check if session data exists
    if (this.request.session.user.email) {
      dynamicFolder = this.request.session.user._id;
      folderPath = path.join(this.uploadsPath, dynamicFolder);

      // Create the folder if it doesn't exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Folder created at: ${folderPath}`);
      } else {
        console.log(`Folder already exists at: ${folderPath}`);
      }

      return folderPath; // Return the path of the folder
    } else {
      console.log("No session data found to create a dynamic folder.");
      return null; // Return null if no session data found
    }
  }
}

module.exports = DynamicFolderCreator;
