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
    default: "none",
  },
  hotels: {
    type: Array,
    default: "unknown",
  },
  restaurants: {
    type: Array,
  },
  crimeRate: {
    type: String,
    default: "none",
  },
  rate: {
    type: Number,
    default: 0,
    validate: (v) => v <= 5,
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
    required: true,
  },
  website: {
    type: String,
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
    default: "unknown",
  },
  languages: {
    type: Array,
    default: "unknown",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Travel", travelSchema);
// const City = mongoose.model("City", citySchema);
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
