const BaseRoute = require("../routes/Baseroute");
// const NewUser = require("../../classes/users/newUser/newUser");
// create a class for the user registration and extend the base route class to inherit the router
class UserRegistration extends BaseRoute {
  constructor() {
    super();
    // initialize the routes immediately the class is instantiated
    this.initializeRoutes();
  }
  // create a method to initialize the routes
  initializeRoutes() {
    // access the getRouter method from the baseRoute class and crinvoke teeate a post route
    this.router.post("/", async (request, response) => {
      try {
        // destructure the request body
        const data = request.body;
        console.log(data);
        // create a new user
        // await new NewUser(fName, lName, email, password).createUser();
        // send a response to the client
        response.status(201).json({
          message: data,
          status: "Fuck yeah!",
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
}
// export the user registration class and instantiate it immediately
module.exports = UserRegistration;
