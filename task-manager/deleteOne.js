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

  // deleteOne
  db.collection("users").deleteOne({
    age: 28,
  });
  // deleteMany : 매칭되는 다큐먼트 모두 제거
});