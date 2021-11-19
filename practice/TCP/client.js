// Client Event
// connect : 소켓 연결 이벤트
// data : 읽을 수 있는 데이터 도착
// end : 소켓 종료
// timeout : 제한 시간 지남
// error : 에러

var net = require('net');

var ip = '127.0.0.1';
var port = 3000;

var socket = new net.Socket();
socket.connect({host:ip, port:port}, function() {
   console.log('Connect Server');

   socket.write('Hello Socket Server\n');
   socket.end();

    socket.on('data', function(chunk) {
        console.log('Send Server : ',
        chunk.toString());        
    });

    socket.on('end', function() {
        console.log('end - Connect Server');
    });
});