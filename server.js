var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodeMailer = require('nodemailer');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});


// app.get('/', function (req, res) {
//     res.render('index');
//  });

app.post('/send-email', function (req, res) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'ajandorek@gmail.com',
      from: `${req.body.name} <${req.body.email}>`,
      subject: req.body.subject,
      text: req.body.message,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
});

app.listen(PORT, function () {
    console.log('Express server is up on PORT ' + PORT);
})