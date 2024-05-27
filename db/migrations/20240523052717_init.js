/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DATABASE_URL);
  console.log(process.env.DB_NAME);
  return knex.schema.createTable("friend", (table) => {
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
  return knex.schema.dropTable("friend");
};
