const BaseRoute = require("../routes/Baseroute");
const PasswordHash = require("../utilities/PasswordHashing");
const User = require("../models/User");

class UserRegistration extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", async (request, response) => {
      try {
        const { name, email, password } = request.body;
        const hashedPassword = await new PasswordHash(password).hashPassword();
        console.log(name, email, hashedPassword);
        await new User({ name, email, password: hashedPassword }).save();
        response.status(201).json({
          isRegistered: true,
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
}

module.exports = UserRegistration;
