const express = require("express");
const router = express.Router();
const Travel = require("../models/Travel");

// let contry = {
//   name: "United States",
//   city: ["new York", "washington"],
//   sight: ["chair", "ff"],
//   food: ["food", "drink"],
//   visitings: 8888800,
//   reviews: "ot good",
// };
//git all
router.get("/", async (req, res) => {
  try {
    const contry = await Travel.find();
    res.json(contry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  //   res.send("hi");
});
router.get("/api/country/", async (req, res) => {
  try {
    const contry = await Travel.find();
    res.json(contry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//create one
router.post("/api/country/", async (req, res) => {
  if (Travel.findOne({ name: req.body.name })) {
    return res.status(409).json({ message: "Please enter a Unique name." });
  }
  const newTravel = new Travel({
    name: req.body.name,
    city: req.body.city,
    food: req.body.food,
    sight: req.body.sight,
    visitings: req.body.visitings,
  });
  try {
    const newCountry = await newTravel.save();
    res.json(newCountry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.post("/", async (req, res) => {
  if (Travel.findOne({ name: req.body.name })) {
    return res.status(409).json({ message: "Please enter a Unique name." });
  }
  const newTravel = new Travel({
    name: req.body.name,
    city: req.body.city,
    food: req.body.food,
    sight: req.body.sight,
    visitings: req.body.visitings,
  });
  try {
    const newCountry = await newTravel.save();
    res.json(newCountry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// // git one
router.get("/api/country/:name", getName, (req, res) => {
  // const name = req.params.name;
  res.json(res.country);
});
router.get("/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const count = await Travel.findOne({ name: name });
    res.json(count);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
//update one
router.patch("/api/country/:name", getName, async (req, res) => {
  if (req.body.name != null) {
    res.country.name = req.body.name;
  }
  if (req.body.city != null) {
    res.country.city = req.body.city;
  }
  try {
    const updateCounty = await res.country.save();
    res.json(updateCounty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//delete one
router.delete("/api/country/:name", getName, async (req, res) => {
  try {
    await res.country.remove();
    res.json({ message: "Deleted Item" });
  } catch (err) {
    res.json({ message: err.message });
  }
});

async function getName(req, res, next) {
  let country;
  try {
    country = await Travel.findOne({ name: req.params.name });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
  res.country = country;
  next();
}
module.exports = router;
