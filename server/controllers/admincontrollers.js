const User = require("../models/user");
const Events = require("../models/events");
exports.getAllUsers = function(req, res, next) {
  console.log("GET ALL USERS INITIATED");

  User.find()
    .then(function(allUsers) {
      res.send({ payload: allUsers });
    })
    .catch(function(err) {
      res.send("The user profile lookup failed");
    });
};

exports.removeUser = function(req, res, next) {
  const userId = req.body.id;
  const userEmail = req.body.email;

  console.log("REMOVE USER INITIATED ON " + userEmail + ". ID = " + userId);
  User.findByIdAndRemove({ _id: req.body.id }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a Itin with _id does not exist, return an error
    if (!existingUser) {
      return res.status(422).send({ error: "User was not found in Database." });
    }
    Events.remove({ userEmail: userEmail }, function(err) {
      if (err) {
        return next(err);
      } else {
        console.log(
          "User with an email of " + userEmail + " successfully deleted."
        );
      }
    });
  });
};
