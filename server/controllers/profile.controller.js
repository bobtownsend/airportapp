const User = require("../models/user");
const userEvents = require("../models/events");

exports.getUser = function(req, res, next) {
  const email = req.body.userEmail;
  User.aggregate([
    {
      $match: { email: email }
    }
  ])
    .then(function(userProfile) {
      res.send({ payload: userProfile });
    })
    .catch(function(err) {
      res.send("The user profile lookup failed");
    });
};

exports.fetchEvents = function(req, res, next) {
  const userEmail = req.body.userEmail;

  userEvents
    .aggregate([
      {
        $match: { userEmail: userEmail }
      }
    ])
    .then(function(events) {
      res.send({ payload: events });
    })
    .catch(function(err) {
      res.send("The user profile lookup failed");
    });
};

exports.addEvent = function(req, res, next) {
  const event = req.body.event;
  const userEmail = req.body.userEmail;

  const Title = event.title;
  const Desc = event.desc;
  const start = event.start;
  const end = event.end;
  const allDay = event.allDay;
  console.log("add Event Started in Profile Controller - SERVER");
  console.log("event: " + event);
  console.log("User Email: " + userEmail);

  userEvents.findOne({ userEmail: userEmail }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    const event = new userEvents({
      userEmail: userEmail,
      events: [
        {
          title: Title,
          allDay: allDay,
          desc: Desc,
          start: start,
          end: end
        }
      ]
    });

    event.save(function(err) {
      if (err) {
        return next(err);
      }
    });

    // If a user with email does NOT exist, create and save user record

    // Repond to request indicating the user was created
    console.log("Event Saved Succesfully");
  });
};
exports.editUser = function(req, res, next) {
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

  User.findOne({ email: oldEmail }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

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
