//========================
//dependencies
//========================
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const port = process.env.PORT || 8888;
require("dotenv").config();
// ========================
// Middlewares
// ========================
app.use(cors());
// app.use(express.json());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const travelRouter = require("./routers/travel");
app.use("/travel", travelRouter);
// ========================
// router
// ========================
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("connect");
});
app.get("/", (req, res) => {
  res.send("hello");
});

// app.get("/api/countries", (req, res) => {
//   res.json(country);
// });

// app.get("/api/countries/:name", (request, response) => {
//   const name = Number(request.params.name);
//   const country = countries.find((co) => co.name === name);
//   if (country) {
//     response.status(200).json(country);
//   } else {
//     response.status(404).end();
//   }
//   response.json(countries);
// });
// ========================
// listen
// ========================
app.listen(8888);
