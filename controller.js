var express = require('express');
var app = express(); 
var dualShock = require('dualshock-controller');
var controller = dualShock(
  {
    config: "dualshock4-generic-driver",
    accelerometerSmoothing: true,
    analogStickSmoothing: false
  });
var request = require("request");

URL = 'http://192.168.2.7:3000/'

controller.on('error', err => console.log(err));

//add event handlers: 
const leftStick = () => {
  let yArray = [];
  controller.on('left:move', data => {
      yArray.push(data.y);
      console.log(yArray);
    if (yArray.length === 50) {
      if (yArray[49] < 115) {
        request(URL + 'up', function(error, response, body) {
          console.log('forward');
          console.log(URL + 'up');       
        });
      }
      else if (yArray[49] > 135) {
        request(URL + 'reverse', function(error, response, body) {
          console.log('reverse');
          console.log(URL + 'reverse');
        });
      }
      return yArray = [];
    }
    if (data.y > 115 && data.y < 135) {
      request(URL + 'stop', function(error, response, body) {
        console.log('stop');
      });
    }
  });
}

const rightStick = () => {
  let yArray = [];
  controller.on('right:move', data => {
      yArray.push(data.y);
      console.log(yArray);
    if (yArray.length === 50) {
      if (yArray[49] < 115) {
        request(URL + 'up', function(error, response, body) {
          console.log('forward');
          console.log(URL + 'up');       
        });
      }
      else if (yArray[49] > 135) {
        request(URL + 'reverse', function(error, response, body) {
          console.log('reverse');
          console.log(URL + 'reverse');
        });
      }
      return yArray = [];
    }
    if (data.y > 115 && data.y < 135) {
      request(URL + 'stop', function(error, response, body) {
        console.log('stop');
      });
    }
  });
}
 
controller.on('square:press', ()=> console.log('square press'));
 
controller.on('square:release', () => console.log('square release'));

controller.on('r2:press', ()=> console.log('r2 pressed'));

controller.setExtras({
  rumbleLeft:  0,   // 0-255 (Rumble left intensity) 
  rumbleRight: 0,   // 0-255 (Rumble right intensity) 
  red:        200,   // 0-255 (Red intensity) 
  green:       80,  // 0-255 (Blue intensity) 
  blue:        30, // 0-255 (Green intensity) 
  flashOn:     225,  // 0-255 (Flash on time) 
  flashOff:    10   // 0-255 (Flash off time) 
});

leftStick();
rightStick();

app.listen(3001, function() {
  console.log('Server Started')
})