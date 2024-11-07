const mongoose = require("mongoose");

const birdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      get: function (value) {
        console.log("value", value);
        return value + "with ";
      },
    },
    birthDate: { type: String, required: true },
  },
  { timestamps: true, toObject: { getters: true }, toJSON: { getters: true } }
);

const Bird = mongoose.model("Bird", birdSchema);
module.exports = Bird;
