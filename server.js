// var io = require('socket.io')(http);
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express(); 

var SerialPort = require('serialport');
var port = new SerialPort('/dev/tty.usbmodem14311', {
  baudRate: 9600 
});

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

// requests to send to Arduino
app.get('/up', function(req, res) {
  console.log('Forward!');
  res.send('Forward!');

    port.write('w');
})

app.get('/left', function(req, res) {
  console.log('Left!');
  res.send('Left!');

  port.write('a');
})

app.get('/stop', function(req, res) {
  console.log('Stop!');
  res.send('Stop!');

  port.write('e');
})

app.get('/right', function(req, res) {
  console.log('Right!');
  res.send('Right!');

  port.write('d');
})

app.get('/reverse', function(req, res) {
  console.log('Reverse!');
  res.send('Reverse!');

  port.write('s');
})

app.listen(3000, function() {
  console.log('Server Started')
})

var server = require('http').createServer(app);
