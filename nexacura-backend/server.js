// Import the express package
const express = require("express")();
// Import the global middlewares
const GlobalMiddlewares = require("./middlewares/global");
// Import the dotenv package
require("dotenv").config();
// Import the database connection
const DatabaseConnection = require("./db/DatabaseConnection");
// Import the routes
const registration = require("./routes/Registration");
// const registration = require("./controllers/routes/Users/register");
// const login = require("./controllers/routes/Users/login");
// const profile = require("./controllers/routes/Users/profile");
// const event = require("./controllers/routes/admin/event");
// const public = require("./controllers/routes/public/public");
// inmitiate the global middlewares
// const admin = require("./controllers/routes/admin/admin");

// // create a route for the login page
// express.use("/login", login.getRouter());

// instantiate the global middlewares
new GlobalMiddlewares(express);
// instantiate the database connection
new DatabaseConnection();
// // create a route for the registration page
express.use("/registration", new registration().router);
// express.use("/profile", profile.getRouter());
// express.use("/admin", admin.getRouter());
// express.use("/events", event.getRouter());
// express.use("/public", public.getRouter());
// create a route for the home page
express.get("/", (req, res) => {
  res.send("Welcome to Nexacura");
});

const PORT = process.env.PORT || 4000;
express.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});