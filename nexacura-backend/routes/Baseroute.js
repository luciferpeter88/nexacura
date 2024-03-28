const express = require("express");
// create a base route class
class BaseRoute {
  constructor() {
    this.router = express.Router();
  }
}

module.exports = BaseRoute;
