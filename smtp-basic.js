var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport();
transporter.sendMail({
    from: 'example@mandice.com',
    to: 'ddixw66@gmail.com',
    subject: 'nodemailer test',
    text: 'Send message from nodemailer!'
}, function(error, info) {
    if (error)
        console.log(error);
    else {
        console.log('Message sent: ' + info.response);
    } 
});
