const express = require("express");
const app = express();

app.get("/name", (req, res) => {
  res.json("Eddie");
});

app.listen(8080);