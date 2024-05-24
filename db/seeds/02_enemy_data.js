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
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY8f3qQzm8dg9bhDi4oeL1Z9wgU1DNYGYZW67MEsnoQrC9W4xqghwa0T19ULsvheFNkuy7-9dRx97jCTW916iK2jkB1_lGpp2GtLHgLasu3PVdWNer6RBAOWixmnOMA7E4C8itZfZ5P9ix/s800/fantasy_kerberos.png",
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
