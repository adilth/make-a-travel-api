const express = require("express");
const router = express.Router();
const Travel = require("../models/Travel");

let contry = {
  name: "United States",
  city: ["new York", "washington"],
  sight: ["chair", "ff"],
  food: ["food", "drink"],
  visitings: 8888800,
  reviews: "ot good",
};
//git all
router.get("/", async (req, res) => {
  try {
    const contry = await Travel.find();
    res.json(contry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/api/country", (req, res) => {
  //   res.send();
  res.json(contry);
});
// // git one
router.get("/api/contry/:name", (req, resp) => {
  const name = Number(req.body.name);
  const country = contry.find((co) => co.name === name);
  if (country) {
    res.status(200).json(country);
  } else {
    res.status(404).end();
  }
  response.json(countries);
});
//create one
router.post("/api/country", (req, res) => {
  const country = req.body;
});
//update one
router.patch("/api/country/", (req, res) => {});
//delete one
router.delete("/api/country", (req, res) => {});
module.exports = router;
