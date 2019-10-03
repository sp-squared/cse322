const net = require('net');

const socket = net.connect(80, 'youtube.com');

socket.on('connect', onConnect);
socket.on('data'   , processResponse);

const httpRequestMessage = 
"GET / HTTP/1.1"          	+ "\r\n"+
"Host: youtube.com"		+ "\r\n"+
""							+ "\r\n";

function onConnect() {
	console.log('connected!');
	socket.write(httpRequestMessage, 'ascii');
}


function processResponse(httpResponseMessage) {
	console.log(httpResponseMessage.toString());
	socket.end();
}

