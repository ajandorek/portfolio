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
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ajtesting28@gmail.com',
            pass: 'testaj123'
        }
    });
    let mailOptions = {
        from: req.body.name + '&lt;' + req.body.email + '&gt;',
        to: 'ajandorek@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});

app.listen(PORT, function () {
    console.log('Express server is up on PORT ' + PORT);
})