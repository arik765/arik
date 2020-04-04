const nodemailer = require('./node_modules/nodemailer/lib/nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahul2016barman@gmail.com',
    pass: 'CriCket@1234'
  }
});

const mailOptions = {
  from: 'rahul2016barman@gmail.com',
  to: 'sahaarpita505@gmail.com',
  cc:'rahul2016barman@gmail.com',
  date: 'date.now',
  subject: 'Sending Email using Node.js',
  text: 'Hello ! Created by me, Arpita'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

