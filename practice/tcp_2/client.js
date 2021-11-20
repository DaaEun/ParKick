// 다음은 기본 TCP 소켓 클라이언트의 전체 구현을 보여준다. 
// 서버에 3개의 다른 소켓이 열려있고 동시에 통신을 하고 있다. 
// 각 클라이언트는 서로 다른 랜덤 포트 번호를 받아 생성된다.

var net = require('net');

function getConnection(connName){
  // 아래와 같이 net.connect()를 호출해 소켓 클라이언트를 생성한다. 
  // 연결할 port와 host를 전달하고, 연결 이벤트를 처리할 콜백 함수도 구현한다.
  var client = net.connect({port: 8107, host:'localhost'}, function() {

    console.log(connName + ' Connected: ');
    console.log('   local = %s:%s', this.localAddress, this.localPort);
    console.log('   remote = %s:%s', this.remoteAddress, this.remotePort);


    // 콜백 함수 내에서 연결 속성을 설정한다. 
    // 아래와 같이 타임아웃이나 인코딩 설정을 할 수 있다.
    this.setTimeout(500);
    this.setEncoding('utf8');

    // data 이벤트를 처리해 서버로부터 받은 데이터를 읽어오려면, 다음 핸들러를 추가한다.
    this.on('data', function(data) {
      console.log(connName + " From Server: " + data.toString());
      this.end();
    });

    this.on('end', function() {
      console.log(connName + ' Client disconnected');
    });

    this.on('error', function(err) {
      console.log('Socket Error: ', JSON.stringify(err));
    });

    this.on('timeout', function() {
      console.log('Socket Timed Out');
    });

    this.on('close', function() {
      console.log('Socket Closed');
    });

  });
  return client;
}

/*
  서버에 데이터를 쓰려면 write() 명령을 실행한다. 
  서버에 많은 데이터를 쓰거나 쓰기가 실패한 경우, 
  drain 이벤트 핸들러를 구현해 버퍼가 비어있을 경우 다시 쓰기를 수행한다.

  다음은 쓰기 실패시 처리를 위한 drain 핸들러를 구현하는 예제다. 
  클로저를 사용해 함수가 종료되더라도 소켓과 데이터 값들을 보존한다.
*/
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

var Dwarves = getConnection("Dwarves");
var Elves = getConnection("Elves");
var Hobbits = getConnection("Hobbits");

writeData(Dwarves, "More Axes");
writeData(Elves, "More Arrows");