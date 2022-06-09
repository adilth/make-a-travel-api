const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: { type: Array, required: true },
  sight: { type: Array, required: true },
  food: { type: Array, required: true },
  visitings: { type: Number, required: true },
  reviews: { type: String, required: true },
  DateValid: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Travel", travelSchema);
