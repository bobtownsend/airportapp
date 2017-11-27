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

exports.removeEvent = function(req,res,next){
  let event = req.body.event;
  let email = req.body.email;
  console.log("EVENT TO BE REMOVED");
  console.log(event);
  console.log("===============================");

  userEvents.find({userEmail:email})
    .then(function(response){
      
      for (var i =0; i < response.length; i++){
        console.log(response[i].events[0]);
        
        if (response[i].events[0]._id == event._id){
          userEvents
          .remove({_id: response[i]._id  })
            .then(function(response) {
              console.log("Events Deleted Successfully! :)");
              
            })
            .catch(function(err) {
              res.send("The user profile lookup failed");
            });
          let eventToDelete = response[i];
        }
      }
        console.log("FOR LOOP FINISHED");
        console.log(eventToDelete);

        
      
    })



}

exports.editUser = function(req, res, next) {
  console.log("EDIT USER FUNCTION STARTED");

  const newEmail = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  
  const phoneNumber = req.body.phoneNumber;
  const oldEmail = req.body.oldEmail;

  console.log(oldEmail);
  console.log(firstName);
  console.log(lastName);
  console.log(phoneNumber);
  console.log(newEmail);

User.updateOne(
  {email: oldEmail}, 
  {$set: { firstName: firstName, lastName: lastName, email: newEmail, phoneNumber: phoneNumber} },
).then((response) => console.log(response))
.catch(err => console.log(err))



};
