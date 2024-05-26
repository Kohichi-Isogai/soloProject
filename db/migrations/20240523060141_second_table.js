/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("my_friend", (table) => {
    table.increments("id").primary();
    table.string("user").unique();
    table.integer("max_battle");
    table.integer("friend_id").references("friend.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("my_friend");
};
