const net = require('net');

const socket = net.connect(9999, 'localhost');

socket.on('connect', onConnect);
socket.on('data'   , processResponse);

const httpRequestMessage = 
"GET /index.html HTTP/1.1"           + "\r\n"+
""				                     + "\r\n";	

function onConnect() {
	console.log('connected!');
	socket.write(httpRequestMessage, 'ascii');
}


function processResponse(httpResponseMessage) {
	console.log(httpResponseMessage.toString());
	socket.end();
}

