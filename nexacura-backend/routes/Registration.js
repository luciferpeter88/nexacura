const BaseRoute = require("../routes/Baseroute");
const PasswordHash = require("../utilities/PasswordHashing");
const User = require("../models/User");
const EmailChecker = require("../utilities/EmailChecker");

class UserRegistration extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", async (request, response) => {
      try {
        const { name, email, password } = request.body;
        const doesEmailExistInDb = await new EmailChecker().checkEmail(email);
        if (doesEmailExistInDb === false) {
          const hashedPassword = await new PasswordHash(
            password
          ).hashPassword();
          await new User({ name, email, password: hashedPassword }).save();
          response.status(201).json({
            isRegistered: true,
          });
        } else {
          response.status(201).json({
            isRegistered: false,
            isEmailRegistered: true,
            message: "Email already exists",
          });
        }
      } catch (error) {
        response.status(500).json({
          isRegistered: false,
        });
      }
    });
  }
}

module.exports = UserRegistration;
