const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";    

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to database.");
  }

  console.log("Connected correctly.");

  // db가 없으면 생성. 있으면 조회
  const db = client.db(databaseName);

  // find : 여러 개 반환
  db.collection("users")
  .find({ age: 24 })
  .toArray((err, users) => {
    console.log(users);
  });
  // find 뒤에 sort(), limit(), skip(), count() 등 함수 사용가능
  db.collection("users")
  .find({ age: 27 })
  .count((err, count) => {
    console.log(count);
  });
});