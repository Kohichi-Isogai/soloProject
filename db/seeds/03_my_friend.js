/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("my_friend").del();
  await knex("my_friend").insert([
    { id: 1, user: "user1", max_battle: 0, friend_id: 1 },
  ]);
};
