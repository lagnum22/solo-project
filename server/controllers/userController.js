const User = require("../models/userModel");

const userController = {};

userController.createUser = (req, res, next) => {
  //console.log("req.body looks like: ", req.body);
  const newUser = new User(req.body);

  newUser
    .save()
    .then((data) => {
      //   console.log(data);
      res.locals.user = data;
      return next();
    })
    .catch((err) =>
      next({ message: `userController.createUser: Error: ${err}` })
    );
};

userController.verifyUser = (req, res, next) => {
  next();
};

module.exports = userController;
