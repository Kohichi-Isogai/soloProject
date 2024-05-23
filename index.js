const express = require("express");
const app = express();

const config = require("./knexfile");
const knex = require("knex")(config);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

app.get("/gacha", async (req, res) => {
  const result = await knex("friend").select();
  res.status(200).send(result[Math.floor(Math.random() * 3)]);
});
