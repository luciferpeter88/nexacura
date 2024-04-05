/* The `DatabaseConnection` class establishes a connection to a MongoDB database using Mongoose in a
Node.js application. */
const mongoose = require("mongoose");

class DatabaseConnection {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }
}

module.exports = DatabaseConnection;
