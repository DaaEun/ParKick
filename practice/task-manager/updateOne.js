// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;

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

  // updateOne
  db.collection("users").updateOne(
    {
      _id: new ObjectID("618b5d8b8b36f8c55f193ec5"),
    },
    {
      $set: {
        // $set : 해당 필드만 수정
        name: "Mike",
      },
    }
  );
  // $set 이외에도 $inc 과 같은 오퍼레이션 있다.
  // $inc를 쓰면 현재 age에서 1증가 값을 저장할 수 있다.
  // db.collection("users").updateOne(
  //   {
  //     _id: new ObjectID("5f64fcb54bd2b8489c070d73"),
  //   },
  //   {
  //     $inc: {
  //       // $inc : 현재 age + 1
  //       age: 1,
  //     },
  //   }
  // );

  /*
   * updateOne은 매칭되는 다큐먼트 중 첫번째만 수정할 수 있고, 
   * updateMany는 매칭되는 모든 다큐먼트를 수정한다는 차이가 있다.
  */
 
});