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
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((result) => {
      console.log("this result of User.findOne: ", result);
      if (result === null) {
        res.locals.result = "User password Error";
        //return next({ message: `password invalid ${err}` });
        throw new Error(
          "It's either your password is wrong or your user name is wrong"
        );
        // return next();
      }
      if (result.password === req.body.password) {
        res.locals.result = true; //sending true back to frontend
        return next();
      }

      return next(); //dont get stuck in middleware
    })
    .catch((err) =>
      next({ message: `userController.verifyUser: Error: ${err}` })
    );
};

module.exports = userController;
