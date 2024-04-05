/* The GetUser class retrieves a user object based on the provided email address from a MongoDB
collection. */
const { connection } = require("mongoose");
class GetUser {
  constructor(email) {
    this.email = email;
  }

  async get() {
    try {
      const data = await connection.db.collection("users").find().toArray();
      const user = data.find((user) => user.email === this.email);
      return user;
    } catch (error) {
      console.log(error);
      throw err;
    }
  }
}
module.exports = GetUser;
