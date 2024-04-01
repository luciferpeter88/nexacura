const BaseRoute = require("../routes/Baseroute");
const EmailChecker = require("../utilities/EmailChecker");
const Authentification = require("../utilities/Authentification");

class Login extends BaseRoute {
  constructor() {
    super();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", async (request, response) => {
      try {
        const { email, password } = request.body;
        request.session.email = email;
        console.log(request.session.email, "Login");
        const doesEmailExistInDb = await new EmailChecker().checkEmail(email);
        if (doesEmailExistInDb) {
          // false if the password is incorrect, otherwise it returns the user data
          const getUserData = await new Authentification(
            password,
            email
          ).verifyUser();
          if (!getUserData) {
            response.json({
              isAuthenticated: false,
              message: "Invalid credentials!",
            });
          } else {
            response.json({
              isAuthenticated: true,
              message: getUserData,
            });
          }
        } else {
          response.json({
            isAuthenticated: false,
            message: "Invalid credentials!",
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

module.exports = Login;
