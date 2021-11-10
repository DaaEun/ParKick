Parkick DBserver
==================
## MongoDB 개념
[SQL vs NoQSQL과 Mongo](https://velog.io/@ckstn0777/MongoDB%EB%9E%80)

***

## MongoDB 설치
```
C:\Users\didek>mongo --version
MongoDB shell version v5.0.3
Build Info: {
    "version": "5.0.3",
    "gitVersion": "657fea5a61a74d7a79df7aff8e4bcf0bc742b748",
    "modules": [
        "enterprise"
    ],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

***

## MongoDB 관리 GUI 툴
[MongoDB 관리 GUI 툴](https://velog.io/@ckstn0777/MongoDB%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)

1. MongoDB Compass 
     * host : localhost
     * 포트 : 27017(default)
     * 접속
2. Robo 3T
     * MongoDB랑 connect
     * host와 포트 동일
     * name : parkickdb
     * Open shell 클릭 -> 쿼리문 작성가능 

***

## Node.js 와 MongoDB 연동 
[Node.js 와 MongoDB 연동](https://velog.io/@ckstn0777/MongoDB%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)   

**insertOne/insertMany** 
> vscode에서 터미널 열기
> ```
> npm init -y   
> npm install mongodb
> ```
 
> parkage.json 해당 js로 수정
> ```
> "start": "node server.js" (defualt) 를
> "start": "node insert_one.js" 수정
> ```

> 터미널
> ```
> npm start
> ```
> Connected correctly. 출력하는지 확인하기    

> Robo3T에서 shell 열기
> ```sql
> db.getCollection('users').find({})
> ```
> 데이터 insert 되었는지 확인    
공식문서 참고 : [Node.js MongoDB Driver API](https://mongodb.github.io/node-mongodb-native/3.6/api/)    
findOne, find, updateOne, updateMAny, deleteOne, deleteMany test 진행 

> 터미널
> ```
> ctrl + c 
> y
> ```

***

## Mongoose 설치

**1. mongodb vs mongoose**   
- mongodb 라이브러리
    1. MongoDB Driver 모듈
    2. 따라서 mongo 콘솔 클라이언트 명령과 동일하게 조작 가능
- mongoose
    1. MongoDB ODM 중 가장 유명한 라이브러리
    2. 데이터베이스 연결, 스키마 정의, 스키마에서 모델로 변환, 모델을 이용해 데이터를 다룸
    3. 프로미스와 콜백 사용가능

**2. NodeJS - Mongoose**
[Mongoose 사용하기](https://velog.io/@ckstn0777/Mongoose-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
> vscode에서 터미널 열기
> ``` 
> npm install mongoose
> ```






***

restAPI
-----------------
[Node.js(express)와 MongoDB 연동 RESTful API - Mongoose](https://poiemaweb.com/mongoose)
***
TCP 소켓 통신 
-----------------
[Node.js에서 구현하는 소켓 서비스](https://mylko72.gitbooks.io/node-js/content/chapter8/intro.html)

[NodeJS와 소켓 통신 연결](https://kimyc1223.github.io/2019-11-27-HoloLens004/)

***
기타 참고자료 
-----------------
[MomgoDB 데이터베이스 관리](https://c5ecbb38d638.gitbooks.io/mongodb-install-manual/content/b370_c774_d130_bca0_c774_c2a4_ad00_b9ac.html)

[다른 서버로 Mongodb 이전](https://novemberde.github.io/post/2017/07/01/Mongodb_transport/)

[Node.JS, WebSocket, Socket.io, TCP, UDP 관련](https://202psj.tistory.com/1199)

_박인규 선배님 참고자료 공유:)_   
[node.js REST API 서버 만들기](https://velog.io/@wimes/series/back-end)   
[NodeJS_REST-API_tutorial](https://github.com/kiryun/NodeJS_REST-API_template)