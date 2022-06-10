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
router.get("/api/country", async (req, res) => {
  try {
    const contry = await Travel.find();
    res.json(contry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//create one
router.post("/api/country", async (req, res) => {
  const newTravel = new Travel({
    name: req.body.name,
    city: req.body.city,
    food: req.body.food,
    sight: req.body.sight,
    visitings: req.body.visitings,
  });
  try {
    const newCountry = await newTravel.save();
    res.status(201).json(newCountry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// router.post("/", async (req, res) => {
//   const newTravel = new Travel({
//     name: req.body.name,
//     city: req.body.city,
//     food: req.body.food,
//     sight: req.body.sight,
//     visitings: req.body.visitings,
//   });
//   try {
//     const newCountry = await newTravel.save();
//     res.status(201).json(newCountry);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// // git one
router.get("api/contry/:name", (req, res) => {
  const name = Number(req.body.name);
  const country = Travel.find((co) => co.name === name);
  if (country) {
    res.status(200).json(country);
  } else {
    res.status(404).end();
  }
  response.json(country);
});
//update one
router.patch("/api/country/", (req, res) => {});
//delete one
router.delete("/api/country", (req, res) => {});
module.exports = router;
