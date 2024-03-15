const express = require("express");
const app = express();
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("<h1>Congratulations</h1>");
});

app.listen(3003);
