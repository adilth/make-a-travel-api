//========================
//dependencies
//========================
const express = require("express");
const cors = require("cors");
const app = express();
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
// ========================
// listen
// ========================
app.listen(port);
