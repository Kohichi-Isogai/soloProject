const express = require("express");
const app = express();

const config = require("./knexfile");
const knex = require("knex")(config);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(__dirname + "/dist"));

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

app.get("/api/gacha", async (req, res) => {
  const result = await knex("friend").select();
  const randomNum = Math.floor(Math.sqrt(Math.random() * 9));
  res.status(200).send(JSON.stringify(result[2 - randomNum]));
});

app.get("/api/battles", async (req, res) => {
  const result = await knex("enemy").select();
  const randomNum = Math.floor(Math.sqrt(Math.random() * 9));
  res.status(200).send(JSON.stringify(result[2 - randomNum]));
});

app.get("/api/friends", async (req, res) => {
  const result = await knex("my_friend")
    .join("friend", "friend.id", "=", "my_friend.id")
    .select();
  res.status(200).send(JSON.stringify(result));
});

app.post("/api/friends", async (req, res) => {
  console.log(req.body);
  console.log(typeof req.body.id);

  await knex("my_friend").insert({
    id: req.body.id,
    user: "user1",
    max_battle: 0,
    friend_id: req.body.id,
  });
  res.status(200).send();
});

// { id: 1, user: "user1", max_battle: 0, friend_id: 1 },
