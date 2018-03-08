const WebSocket = require('ws');
const ws = new WebSocket('ws://192.168.2.7:3001');
const dualShock = require('dualshock-controller');
const controller = dualShock(
  {
    config: "dualshock4-generic-driver",
    accelerometerSmoothing: true,
    analogStickSmoothing: false
  });

controller.on('error', err => console.log(err));

//add event handlers: 
ws.on('open', function open() {
  const leftStick = () => {
    let yArray = [];
    controller.on('left:move', data => {
      yArray.push(data.y);
      console.log(yArray);
      if (yArray.length === 35) {
        if (yArray[34] < 115) {
            console.log('w')
            ws.send('w');
        }
        else if (yArray[34] > 135) {
            console.log('s');
            ws.send('s');
        }
        return yArray = [];
      }
      if (data.y > 115 && data.y < 135) {
        ws.send('e');
      }
    });
  }

  const rightStick = () => {
    let xArray = [];
    controller.on('right:move', data => {
      xArray.push(data.x);
      console.log(xArray);
      if (xArray.length === 35) {
        if (xArray[34] < 115) {
            console.log('a')
            ws.send('a');
        }
        else if (xArray[34] > 135) {
            console.log('d');
            ws.send('d');
        }
        return xArray = [];
      }
      if (data.x > 115 && data.x < 135) {
        ws.send('e');
      }
    });
  }

  leftStick();
  rightStick();
  
  controller.on('square:press', ()=> console.log('square press'));
  
  controller.on('square:release', () => console.log('square release'));

  controller.on('r2:press', ()=> {
    ws.send('q');
    console.log('r2 pressed');
  });

  controller.setExtras({
    rumbleLeft:  0,   // 0-255 (Rumble left intensity) 
    rumbleRight: 0,   // 0-255 (Rumble right intensity) 
    red:        200,   // 0-255 (Red intensity) 
    green:       80,  // 0-255 (Blue intensity) 
    blue:        30, // 0-255 (Green intensity) 
    flashOn:     225,  // 0-255 (Flash on time) 
    flashOff:    10   // 0-255 (Flash off time) 
  });
});