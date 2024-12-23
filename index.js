const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", function (req, res) {
  res.send("home");
});

app.get("/post", function (req, res) {
  res.json({
    msg: "Post Route",
  });
});

app.post("/post", function (req, res) {
  res.json({ msg: "Post method" });
});

app.listen(3000);
module.exports = app;
