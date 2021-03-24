const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signUp = (req, res) => {
  bcrypt
    .hash(req.body.password, 8)
    .then((hashedpassword) => {
      var user = {
        username: req.body.username,
        email: req.body.email,
        password: hashedpassword,
      };

      const user1 = new User(user);

      user1
        .save()
        .then((user) => {
          res.status(200).json({
            message: `user ${user.username} created successfully!`,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error in hashing password!",
      });
    });
};

exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then((result) => {
        if (result) {
          let token = jwt.sign(
            { username: user.username },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
          );
          res.status(200).json({
            message: `${user.username} logged in successfully!`,
            token,
            name: user.username,
          });
        } else {
          res.json({
            error: "Incorrect Password!",
          });
        }
      });
    } else {
      res.status(403).json({
        error: `${user.username} does not exist!`,
      });
    }
  });
};
