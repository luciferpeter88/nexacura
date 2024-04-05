/* The EmailChecker class checks if a given email is already registered in the User model. */
const User = require("../models/User");
class EmailChecker {
  constructor() {
    this.isRegisteredEmail = false;
  }

  async checkEmail(email) {
    try {
      const result = await User.findOne({ email: email }).exec();
      this.isRegisteredEmail = !!result;
      return this.isRegisteredEmail;
    } catch (err) {
      console.error("An error occurred:", err);
      throw err;
    }
  }
}
module.exports = EmailChecker;
