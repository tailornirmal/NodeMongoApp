const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there , My name is Nirmal Kumar" });
});

app.listen(5000);
