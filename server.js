// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var SerialPort = require('serialport');
// var port = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

/*
const showPage = (req, res, next) => {
  console.log('log')
  next();
}

app.use(showPage);*/

// View Engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// BodyParser MiddleWare 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

// Get request on view
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function() {
  console.log('Server Started')
})

var server = require('http').createServer(app);
