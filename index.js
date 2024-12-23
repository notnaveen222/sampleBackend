const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("home");
});

app.use(express.json());
app.listen(3000);
