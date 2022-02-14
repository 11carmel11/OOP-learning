const express = require("express");
const cors = require("cors");
const { ClassicGuitar, ElectricGuitar, BassGuitar } = require("./classes");

const app = express();
app.use(cors());

app.get("/ClassicGuitar", (req, res) => {
  res.send(`function suitCase(){return ${ClassicGuitar}};
  function generic(){return "hey"}`);
});

app.get("/ElectricGuitar", (req, res) => {
  res.send(`function suitCase(){return ${ElectricGuitar}};
  function generic(){return ${ClassicGuitar}}`);
});

app.get("/BassGuitar", (req, res) => {
  res.send(`function suitCase(){return ${BassGuitar}};
  function generic(){return ${ClassicGuitar}}`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
