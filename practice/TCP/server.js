var net = require('net');   //TCP module

// 클래스
// net.Server
// net.Socket

// Server 생성
// var server = net.createServer(option)
// server.listen(port)
// server.close()
// server.getConnections(callback) : 연결갯수
// server.address() : 서버 주소

// Server Event
// listening : 포트 바인딩, 접속 가능한 상태 이벤트
// connection : 클라이언트 접속 이벤트
// close : 서버 닫기(연결된 소켓이 없을 때만 발생)
// error : 에러

var server = net.createServer(function(socket) {
    // connection event
    console.log('Connect Client');
    socket.write('Welcome to Socket Server');

    socket.on('data', function(chunk) {
        console.log('Send Client : ',
        chunk.toString());
    });

    socket.on('end', function() {
        console.log('end - Connect Client');
    });
});

server.on('listening', function() {
    console.log('Server is listening');
});

server.on('close', function() {
    console.log('Server closed');
});

server.listen(3000);