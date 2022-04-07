const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  X: { type: Number, default: 0 },
  Ties: { type: Number, default: 0 },
  O: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
