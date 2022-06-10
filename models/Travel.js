const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: Array,
    required: true,
  },
  food: {
    type: Array,
    required: true,
  },
  visitings: {
    type: Number,
    required: true,
  },
  DateValid: {
    type: Date,
    default: Date.now(),
  },
  sight: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("Travel", travelSchema);
/*
 sight: {
    type: Array,
    required: true,
  },
  visitings: {
    type: Number,
    required: true,
  },
  rewiews: {
    type: String,
    required: true,
  },
  */
