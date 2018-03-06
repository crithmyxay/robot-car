// var io = require('socket.io')(http);
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express(); 

var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600 
});

var dualShock = require('dualshock-controller');
var controller = dualShock(
  {
    config: "dualshock4-generic-driver",
    accelerometerSmoothing: true,
    analogStickSmoothing: false
  });

controller.on('error', err => console.log(err));

//add event handlers: 
controller.on('left:move', data => console.log('left Moved: ' + data.x + ' | ' + data.y));
 
controller.on('right:move', data => console.log('right Moved: ' + data.x + ' | ' + data.y));
 
controller.on('connected', () => console.log('connected'));
 
controller.on('square:press', ()=> console.log('square press'));
 
controller.on('square:release', () => console.log('square release'));

controller.on('r2:press', ()=> console.log('r2 pressed'));

controller.setExtras({
  rumbleLeft:  0,   // 0-255 (Rumble left intensity) 
  rumbleRight: 0,   // 0-255 (Rumble right intensity) 
  red:         0,   // 0-255 (Red intensity) 
  green:       75,  // 0-255 (Blue intensity) 
  blue:        225, // 0-255 (Green intensity) 
  flashOn:     40,  // 0-255 (Flash on time) 
  flashOff:    10   // 0-255 (Flash off time) 
});

//right-left movement 
controller.on('rightLeft:motion', data => console.log(data));
 
//forward-back movement 
controller.on('forwardBackward:motion', data => console.log(data));
 
//up-down movement 
controller.on('upDown:motion', data => console.log(data));

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
