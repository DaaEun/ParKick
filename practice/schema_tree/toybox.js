const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({ driver: mongoose.ObjectId });
 
const Car = mongoose.model('Car', carSchema);
 
const car = new Car();
car.driver = new mongoose.Types.ObjectId();
 
typeof car.driver; // 'object'
car.driver instanceof mongoose.Types.ObjectId; // true
 
car.driver.toString(); // Something like "5e1a0651741b255ddda996c4"

var ToySchema = new Schema({ name: String });
var ToyBoxSchema = new Schema({
  toys: [ToySchema],
  buffers: [Buffer],
  strings: [String],
  numbers: [Number]
  // ... etc
});
 
//
var ToyBox = mongoose.model('ToyBox', ToyBoxSchema);
console.log((new ToyBox()).toys); // []
 
//이 기본값을 덮어 쓰려면 기본값을 undefined 으로 설정해야합니다. 
var ToyBoxSchema = new Schema({
  toys: {
    type: [ToySchema],
    default: undefined
  }
});
 
//참고 : 빈 배열은 Mixed와 같습니다. 
var Empty1 = new Schema({ any: [] });
var Empty2 = new Schema({ any: Array });
var Empty3 = new Schema({ any: [Schema.Types.Mixed] });
var Empty4 = new Schema({ any: [{}] });