const User = require("../models/userModel");

const userController = {};

userController.createUser = (req, res, next) => {
  //write code to create user in db
  next();
};

userController.verifyUser = (req, res, next) => {
  next();
};

module.exports = userController;
