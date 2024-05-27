/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("my_friend").del();
  await knex("friend").del();
  await knex("friend").insert([
    {
      id: 1,
      name: "friend1",
      attack: 4,
      hp: 15,
      url: "https://blogger.googleusercontent.com/img/a/AVvXsEjyeJgJIrzCF5Ck3iDJAS25qLd7P02PixI-UWNgtSyq5YHPa9v5ngQgeJIjoRypNDVpQrAyKh3I4EZnFXMAgQIrsDfF5dCTNY_VPrOmkNWO18doT6xehVo70halIYqycSTnfxjffLXgcrGmRu-F4KweGragY9pRkKtvB40s7FrvuI4sUD0XRRkqh0pltw=s805",
    },
    {
      id: 2,
      name: "friend2",
      attack: 6,
      hp: 12,
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9b1voNd6MN-QGgnE5Ed6rDRpCAG5LfYInQ1XtyBUnLLLrOOZx1xMldnka1dxhlR3SaL7uIXMhWM2OCvKXpcmAf5aWHNZFSW-cmeEewFl5lbxeHbLZJNxOFypMQr_ODdYEQFjaisVYDT9p/s800/mahoutsukai_woman.png",
    },
    {
      id: 3,
      name: "friend3",
      attack: 10,
      hp: 20,
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7g0agTqNmdupJYisknrdc3WYdJysY0Q34JsTMzVc6Nsowz0bLujAuCZswTGIth0HQEWRa5H1Smq65RCjvR8eRVBF0g-zFjIovq1OKLNrMyPT_SMbEK-lrV06u9uStrIWPWdaaolQue8M/s800/yuusya_game.png",
    },
  ]);
};
