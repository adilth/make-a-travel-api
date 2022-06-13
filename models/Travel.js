const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sight: {
    type: Array,
  },
  disc: {
    type: String,
  },
  Hotels: {
    type: Array,
  },
  Restaurants: {
    type: Array,
  },
  crimeRate: {
    type: Number,
  },
});
const travelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: citySchema,
    required: true,
  },
  food: {
    type: Array,
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
  visitings: {
    type: Number,
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
