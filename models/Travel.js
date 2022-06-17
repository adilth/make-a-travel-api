const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
  cityname: {
    type: String,
  },
  citySight: {
    type: Array,
  },
  disc: {
    type: String,
  },
  hotels: {
    type: [String],
  },
  restaurants: {
    type: Array,
  },
  crimeRate: {
    type: Number,
  },
  rate: {
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
    type: [citySchema],
  },
  food: {
    type: Array,
    required: true,
  },
  sight: {
    type: Array,
  },
  visitings: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
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
