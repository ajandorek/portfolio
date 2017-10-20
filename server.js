var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
const PORT = process.env.PORT || 3000;
const apikey = process.env.SENDGRID_API_KEY;

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

app.get('/send-email', function (req, res) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(apikey);
    const msg = {
        to: "ajandorek@gmail.com",
        from: {
            email: req.query.email,
            name: req.query.name
        },
        subject: req.query.subject,
        html: req.query.message,
    };
    sgMail.send(msg).then(obj=>res.send("Thank You! I will contact you soon."));
});

app.listen(PORT, function () {
    console.log('Express server is up on PORT ' + PORT);
});