var express = require('express');
var app = express(); 
var dualShock = require('dualshock-controller');
var controller = dualShock(
  {
    config: "dualshock4-generic-driver",
    accelerometerSmoothing: true,
    analogStickSmoothing: false
  });

var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600 
});

controller.on('error', err => console.log(err));

//add event handlers: 
controller.on('left:move', () => port.write('w') /*console.log('left Moved: ' + data.x + ' | ' + data.y)*/);
 
controller.on('right:move', data => console.log('right Moved: ' + data.x + ' | ' + data.y));
 
controller.on('connected', () => console.log('connected'));
 
controller.on('square:press', ()=> console.log('square press'));
 
controller.on('square:release', () => console.log('square release'));

controller.on('r2:press', ()=> port.write('e'));

controller.setExtras({
  rumbleLeft:  0,   // 0-255 (Rumble left intensity) 
  rumbleRight: 0,   // 0-255 (Rumble right intensity) 
  red:        200,   // 0-255 (Red intensity) 
  green:       80,  // 0-255 (Blue intensity) 
  blue:        30, // 0-255 (Green intensity) 
  flashOn:     200,  // 0-255 (Flash on time) 
  flashOff:    10   // 0-255 (Flash off time) 
});

app.listen(3001, function() {
  console.log('Server Started')
})