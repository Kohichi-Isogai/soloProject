/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("enemy", (table) => {
    table.increments("id").primary();
    table.string("name").unique();
    table.integer("attack");
    table.integer("hp");
    table.text("url");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("enemy");
};
