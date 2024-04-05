/* The BaseRoute class is a JavaScript class that creates a base route using Express.js. */
const express = require("express");
// create a base route class
class BaseRoute {
  constructor() {
    this.router = express.Router();
  }
}

module.exports = BaseRoute;
