var io = require('socket.io').listen(server);
var ipAddress = '' //make it pull server's ip address
var socket = io.connect('http://localhost:3000')
// var socket = io.connect(`http://${ipAddress}`);
var USB = new SerialPort('/dev/tty-usbserial1', {
  baudRate: 9600
});

console.log('server running')

// io.sockets.on('connection', function(socket){
//   console.log('Connected: %s connected', socket.id)});

const sendData = (recData) => {
  //command to send to arduino/serial port
  console.log(command + ' data sent')

};


