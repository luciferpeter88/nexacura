const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");

class GlobalMiddlewares {
  // create a constructor to initialize the express arguement
  constructor(expressArguement) {
    this.app = expressArguement;
    // run the setup method immediately the class is instantiated
    this.setup();
  }

  setup() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cookieParser());
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH", "DELETE"],
        credentials: true,
      })
    );
    this.app.use(
      session({
        secret: "12345",
        name: "session",
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false,
        },
      })
    );

    this.app.use(express.static("uploads"));
  }
}

module.exports = GlobalMiddlewares;
