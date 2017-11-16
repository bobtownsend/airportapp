const User = require('../models/user');

exports.getUser = function(req,res,next){
  const email = req.body.userEmail;
  console.log("GET USER INITIATED");
  console.log("GET USER INITIATED");
  console.log("GET USER INITIATED");
  console.log("GET USER INITIATED");
  console.log("GET USER INITIATED");
  console.log("GET USER INITIATED");
  console.log(userEmail);
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) { return next(err) }

    // If a user with email does exist, return an error
    if (existingUser) {
      res.send({response: existingUser})
  }

  });
}

exports.editUser = function (req, res, next) {

    console.log("EDIT USER FUNCTION STARTED");
    
    
    const newEmail = req.body.email;
    const fullName = req.body.fullName;
    const phoneNumber = req.body.phoneNumber;
    const oldEmail = req.body.oldEmail;

    console.log(newEmail);
    console.log(fullName);
    console.log(phoneNumber);
    console.log(newEmail);
    
    // if (!email || !password) {
    //   return res.status(422).send({ error: 'You must provide email and password'});
    // };
  
    // See if a user with the given email exists
    
    User.findOne({ email: oldEmail }, function (err, existingUser) {
      if (err) { return next(err) }
  
      // If a user with email does exist, return an error
      if (existingUser) {

    }
  
      // If a user with email does NOT exist, create and save user record
    //   const user = new User({
    //     email: email,
    //     password: password,
    //     firstName: firstName,
    //     lastName: lastName
    //   });
  
  
        // Repond to request indicating the user was created
        
      
    });
  };