const mongoose = require("mogoose");
const Schema = mongoose.Schema;

//create schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: TextTrackCue
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("user", UserSchema);
