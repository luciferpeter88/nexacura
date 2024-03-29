const bcrypt = require("bcrypt");
const GetUser = require("./GetUser");
class Authentification {
  constructor(userInputPassword, email) {
    this.userInputPassword = userInputPassword;
    this.email = email;
  }

  async verifyUser() {
    const user = await new GetUser(this.email).get();
    const storedUserHashedPassword = user.password;
    try {
      // compare the user input password with the hashed password from the database and return it as a boolean(true or false)
      const isMatch = await bcrypt.compare(
        this.userInputPassword,
        storedUserHashedPassword
      );
      if (isMatch) {
        return user;
      } else {
        return false;
      }
    } catch (err) {
      console.error("Error verifying password:", err);
      //   console.error("Error verifying password:", err);
      throw err;
    }
  }
}

module.exports = Authentification;
