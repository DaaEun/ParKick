// 기본 TCP 소켓 서버의 전체 구현을 보여준다. 
// 소켓 서버는 8107 포트로 연결을 받고, 데이터를 읽은 후 클라이언트에 문자열을 쓴다.
var net = require('net');

// 소켓서버는 Server 객체의 close 와 error 이벤트와 클라이언트 Socket 객체의 연결 이벤트를 처리해야 한다.
// Server 객체를 사용해 소켓 서버를 구현하는 첫 단계는 아래와 같이 net.createServer() 호출을 통해 
// 소켓 서버를 생성한다. 연결 콜백 핸들러를 제공하고 listen() 호출을 통해 포트 수신을 시작한다.
var server = net.createServer(function(client) {
  console.log('Client connection: ');
  console.log('   local = %s:%s', client.localAddress, client.localPort);
  console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);

  // connection 이벤트 호출 내에서는 연결 속성을 설정한다. 
  // 아래와 같이 타임아웃이나 인코딩 설정을 할 수 있다.
  client.setTimeout(500);
  client.setEncoding('utf8');

  // data 이벤트 핸들러를 사용해 클라이언트에서 받은 데이터를 읽어오려면, 다음 핸들러를 추가한다.
  client.on('data', function(data) {
    console.log('Received data from client on port %d: %s',
                client.remotePort, data.toString());
    console.log('  Bytes received: ' + client.bytesRead);
    writeData(client, 'Sending: ' + data.toString());
    console.log('  Bytes sent: ' + client.bytesWritten);
  });

  client.on('end', function() {
    console.log('Client disconnected');
    server.getConnections(function(err, count){
      console.log('Remaining Connections: ' + count);
    });
  });

  client.on('error', function(err) {
    console.log('Socket Error: ', JSON.stringify(err));
  });

  client.on('timeout', function() {
    console.log('Socket Timed out');
  });

});

// 연결 콜백 핸들러를 제공하고 listen() 호출을 통해 포트 수신을 시작한다.
server.listen(8107, function() {

  console.log('Server listening: ' + JSON.stringify(server.address()));
  // listen 콜백 핸들러 안에서 서버 객체의 close와 error 이벤트를 지원할 핸들러를 추가한다.
  server.on('close', function(){
    console.log('Server Terminated');
  });

  server.on('error', function(err){
    console.log('Server Error: ', JSON.stringify(err));
  });

});

function writeData(socket, data){

  var success = !socket.write(data);

  if (!success){
    (function(socket, data){
      socket.once('drain', function(){
        writeData(socket, data);
      });
    })(socket, data);
  }
}