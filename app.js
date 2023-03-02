const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors());

app.get("/name", (req, res) => {
  res.json("Eddie");
});

app.listen(8080);