const jwt = require("jwt-simple");
const User = require("../models/user");
// Take a user ID and encode it with our secret
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.id, iat: timestamp },
    "mysupersecretbananapants"
  );
}
exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};
exports.signOut = function(req, res, next) {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("authenticated");
};
exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const adminCode = req.body.adminCode;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  let isAdmin;
  const secretKey = "123secret";
  if (adminCode === secretKey) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  // const secretKey = '123secret';
  // let isAdmin;
  // if (adminCode === secretKey){
  //   isAdmin = true;
  // } else {
  //   isAdmin = false;
  // }
  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      isAdmin: isAdmin
    });
    user.save(function(err) {
      if (err) {
        return next(err);
      }
      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
