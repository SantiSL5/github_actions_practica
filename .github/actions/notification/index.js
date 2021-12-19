const core = require('@actions/core');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: core.getInput('email'),
    pass: core.getInput('password')
  }
});

var mailOptions = {
  from: core.getInput('email'),
  to: core.getInput('email'),
  subject: core.getInput('subject'),
  text: core.getInput('text')
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
