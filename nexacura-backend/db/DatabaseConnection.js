const mongoose = require("mongoose");

class DatabaseConnection {
  constructor() {
    this.connect();
  }

  async connect() {
    // Connect to the database
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }
}

module.exports = DatabaseConnection;
