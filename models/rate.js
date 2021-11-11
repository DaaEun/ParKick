// models/rate.js
// rate : like / unlike

const mongoose = require("mongoose");
const validator = require("validator");

// 스키마 생성
const RateSchema = new mongoose.Schema({
  like: {
    type: Boolean,
    default: true,
  },
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

// 모델 생성
const Rate = mongoose.model("Rate", RateSchema);

module.exports = Rate;