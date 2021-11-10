//const mongodb = require("mongodb");

//const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";    

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to database.");
  }

  console.log("Connected correctly.");

  // db가 없으면 생성. 있으면 조회
  const db = client.db(databaseName);

  // _id를 검색하려면 ObjectID를 이용해야 함.
  // findById
  db.collection("users").findOne({ _id: new ObjectID("618b5b4d775358dbe7b1b32b") }, (err, user) => {
    if (err) {
      return console.log("Unable to insert user");
    }

    // 실행된 결과 반환
    console.log(user);
  });

});