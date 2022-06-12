//========================
//dependencies
//========================
require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// ========================
// Middlewares
// ========================
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const travelRouter = require("./routers/travel");
app.use("/travel", travelRouter);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(cors());
app.use(express.json({ strict: true }));
app.use(function (err, req, res, next) {
  if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    "body" in err &&
    err.type === "entity.parse.failed"
  ) {
    res.status(400);
    res.set("Content-Type", "application/json");
    res.json({
      message: "JSON malformed",
    });
  } else {
    next();
  }
});

// ========================
// router
// ========================

mongoose.connection
  .once("open", function () {
    console.log("Conection has been made!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });
app.get("/", (req, res) => {
  const conn = mongoose.connection;
  conn.db
    .collection("travels")
    .find()
    .toArray()
    .then((data) => {
      res.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
});
// ========================
// listen
// ========================
const port = process.env.PORT || 5000;
app.listen(port);
