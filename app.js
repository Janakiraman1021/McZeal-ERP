const express = require("express")

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.get('/welcome', (req, res) => {
    res.sendFile(__dirname + '/welcome.html');
});

app.get('/error', (req, res) => {
    res.sendFile(__dirname + '/error.html');
});

module.exports = app;