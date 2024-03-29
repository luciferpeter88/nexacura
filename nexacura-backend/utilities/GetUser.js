const { connection } = require("mongoose");
class GetUser {
  constructor(email) {
    this.email = email;
  }

  async get() {
    try {
      // get the users collection from the database and convert to an array
      const data = await connection.db.collection("users").find().toArray();
      // find the user with the user input email from the database
      const user = data.find((user) => user.email === this.email);
      return user;
    } catch (error) {
      console.log(error);
      throw err;
    }
  }
}
module.exports = GetUser;
