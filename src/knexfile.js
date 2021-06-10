// Update with your config settings.
import path from 'path'

module.exports = {

  main: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: "netflix",
      port: 3306

    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'database', 'seeds')
    }
  }
};
