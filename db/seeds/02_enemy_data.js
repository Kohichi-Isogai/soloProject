/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("enemy").del();
  await knex("enemy").insert([
    {
      id: 1,
      name: "enemy1",
      attack: 2,
      hp: 6,
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPEnaTjO3Bhl_nUapYh7CYQCGcvNFv0KIDbWOPhdQSg-Cz4zh1nHBfxVoTwt-sN2NdeV6sRggpFUgwxWxhILZnT0Dc2N2d3eBz-urwwzpPwdYkfN29HqzmaTAN9DCVdXWbhrz7h870_SYf/s1600/fantasy_game_character_slime.png",
    },
    {
      id: 2,
      name: "enemy2",
      attack: 5,
      hp: 8,
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMFmU_rkDbLo-yb5YyMCwfNQLtuFmnd7rNn90W3AWFa3AtWUEQ1WSSbWQPtABHGs_RXUwUmBkyRq1DA83ud9RNJGYSDsNcOQNZHPdME9XS8yxUzj8kv2R1kaBJuGcxM9ozd0e-52rv2SIz/s1600/uma_bigfoot.png",
    },
    {
      id: 3,
      name: "enemy3",
      attack: 8,
      hp: 15,
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkDZFHXugOEho62wp3nY9zo3SYl3qdbYwT_xh0jtLvUcD47vynnptKtmYKzkJLY5i4NFSdKvwgvZTCF1dhPyM-JXAe6ASgprYgpXr6pUsaoM-YCmXIN6gCZxoWDQm9GBlyhTeNyjkqfkZq/s800/fantasy_maou_devil.png",
    },
  ]);
};
