const mongoose = require("mongoose");

// Ask Sarma about "new"
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  breed: String,
});

module.exports = mongoose.model("Pet", petSchema);
