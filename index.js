const express = require("express");
const app = express();

const config = require("./knexfile");
const knex = require("knex")(config);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
