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
  // if (Travel.findOne({ name: req.body.name })) {
  //   return res.status(409).json({ message: "Please enter a Unique name." });
  // }
  try {
    let travel = await Travel.findOne({ name: req.body.name });

    if (travel) {
      return res.status(400).send("the country already exists with that name");
    }

    const newTravel = await Travel.create(req.body);
    const newCountry = await newTravel.save();
    res.json(newCountry);
  } catch (err) {
    console.log(err);

    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).send("Something went wrong");
  }
  // const newTravel = new Travel({
  //   name: req.body.name,
  //   city: {
  //     cityname: req.body.cityname,
  //     citySight: req.body.citySight,
  //     disc: req.body.disc,
  //     hotels: req.body.hotels,
  //     restaurants: req.body.restaurants,
  //     crimeRate: req.body.crimeRate,
  //     rate: req.body.rate,
  //   },
  //   food: req.body.food,
  //   sight: req.body.sight,
  //   visitings: req.body.visitings,
  // });
  // try {
  //   const newCountry = await newTravel.save();
  //   res.json(newCountry);
  //   // res.redirect("index.ejs");
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});
router.post("/", async (req, res) => {
  try {
    let travel = await Travel.findOne({ name: req.body.name });

    if (travel) {
      return res.status(400).send("the country already exists with that name");
    }
    const newTravel = await Travel.create(req.body);
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
  if (req.body.food != null) {
    res.country.food = req.body.food;
  }
  try {
    let updateCounty = await res.country.update(req.body);
    res.json(updateCounty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:name", getName, async (req, res) => {
  const { name, food } = req.body;

  try {
    let updateCounty = await Travel.updateOne(
      { name: req.params.name },
      { $push: { food: food } },
      { new: true }
    );
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
router.delete("/:id", async (req, res) => {
  let country;

  try {
    if ((await Travel.findOne({ _id: req.params.id })) == null) {
      return res.status(404).json({ message: "can not find id" });
    }
    country = await Travel.remove({ _id: req.params.id });
    return res.json(country);
  } catch (err) {
    res.json({ message: err.message });
  }
});

async function getName(req, res, next) {
  let country;
  try {
    country = await Travel.findOne({ name: req.params.name });
    if (country == null) {
      return res.status(404).json({ message: "can not find country" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.country = country;
  next();
}
module.exports = router;
