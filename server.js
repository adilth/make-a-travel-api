//========================
//dependencies
//========================
const express = require("express");
const cors = require("cors");
const app = express();
const mongoClient = require("mongodb").MongoClient;
const port = process.env.NODE_ENV || 8888;
// ========================
// Middlewares
// ========================

app.use(cors());
app.use(express.json());

// ========================
// router
// ========================

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/countries", (req, res) => {
  res.json(country);
});

app.get("/api/countries/:name", (request, response) => {
  const name = Number(request.params.name);
  const country = countries.find((co) => co.name === name);
  if (country) {
    response.status(200).json(country);
  } else {
    response.status(404).end();
  }
  response.json(countries);
});
// ========================
// listen
// ========================
app.listen(port);
