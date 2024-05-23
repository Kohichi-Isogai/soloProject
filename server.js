const express = require("express");
const app = express();

const config = require("./knexfile");
const knex = require("knex")(config);

app.use(express.json());
app.use("/", express.static(__dirname + "/dist"));

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

app.get("/gacha", async (req, res) => {
  const result = await knex("friend").select();
  const randomNum = Math.floor(Math.sqrt(Math.random() * 9));
  res.status(200).send(JSON.stringify(result[2 - randomNum]));
});

app.get("/battles", async (req, res) => {
  const result = await knex("enemy").select();
  const randomNum = Math.floor(Math.sqrt(Math.random() * 9));
  res.status(200).send(JSON.stringify(result[2 - randomNum]));
});
