// Update with your config settings.
require("dotenv").config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME
        ? process.env.DB_NAME
        : process.env.DATABASE_URL,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "db/migrations",
      // tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_URL,
    },
    migrations: {
      directory: "db/migrations",
      // tableName: "knex_migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
