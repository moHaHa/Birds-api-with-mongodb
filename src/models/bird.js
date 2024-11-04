const mongoose = require("mongoose");

const birdSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    birthDate: { type: String, required: true },
  },
  { timestamps: true }
);

const Bird = mongoose.model("Bird", birdSchema);
module.exports = Bird;
