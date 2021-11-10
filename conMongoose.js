//1단계 : 연결
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-mongoose", {
    useNewUrlParser: true,
    // useCreateIndex: true, // 몽구스 버전 6.0 이상 지원 X
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  // 2단계 : 스키마 생성
  // MongoDB에서 스키마가 없지만, Mongoose에서 Schema 정의 가능. 
  // Schema : 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 식으로 되어있는지 정의하는 객체
  const UserSchema = new mongoose.Schema({
    // name: String,
    // required 검증 : name을 빼서 저장하려고 하면 에러발생
    name: {
        type: String,
        trim: true,
        required: true,
      },

    // age: Number,
    // validate 검증 : age가 당연히 0보다 작으면 안됨.
    age: {
        type: Number,
        validate(value) {
          if (value < 0) {
            throw new Error("Age must be a postive number");
          }
        },
    },
    saveDate: {
      type: Date,
      default: Date.now,
    },
});

// 3단계 : 모델 생성
// User라고 썼으나, 실제 DB에는 컬렉션이름이 users라고 저장.
// 대소문자 구분 X, 복수형태가 기본 -> 자동 users 저장
const User = mongoose.model("User", UserSchema);

// 4단계 : 객체 생성
// 하나의 document 생성
const darlo = new User({
    name: "darlo",
    age: 24,
});

// 5단계 : 저장
darlo.save()
  .then(() => {
    console.log(darlo);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });