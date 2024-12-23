const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("home");
});

app.post("/post", function (req, res) {
  res.json({
    msg: "Post Route",
  });
});

app.use(express.json());
app.listen(3000);
