const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing


exports.sendMessage = function (req, res, next) {
    const email = req.body.email;
    const fullName = req.body.fullName;
    const phoneNumber = req.body.phoneNumber;
    const subject = req.body.subject;
    const message = req.body.message;

    console.log("CONTACT MESSAGE CONTROLLER SENT");
    console.log(email);
    console.log(fullName);
    console.log(phoneNumber);
    // console.log(subject);
    console.log(message);


    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
           
            user: 'fosterthefuture44@gmail.com',
            pass:'Brassmonkey12!',
           
        }
    });
    var mailOptions = {
        from: email,
        //Enter as many emails as you'd 
        to: "fosterthefuture44@gmail.com",
        text: message,
        html: `<br/><p> From: ${email} <br/> <br/> </p><p> Phone: ${phoneNumber} <br/> <br/> </p><p> Message: ${subject} <br/> <br/> </p> <br/> <p> <br/> <br/> <br/> <p> - From Foster The Future Email Service<br/>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});

        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});            
        };
    });

    
    
  };
  

