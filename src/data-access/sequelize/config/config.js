// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }


// require("dotenv").config();

// module.exports = {  
//   "development": {
//     username: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDATABASE,
//     host: process.env.PGHOST,
//     dialect: "postgres",
//     logging: false,
//   },
//   "test": {
//     username: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDATABASE_TEST,
//     host: process.env.PGHOST,
//     dialect: "postgres",
//     logging: false,
//   },
//   "production": {
//     username: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDATABASE,
//     host: process.env.PGHOST,
//     dialect: "postgres",
//     logging: false,
//   }
// };

require('dotenv').config();

module.exports = {  
  "development": {
    username: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'postgres',
    database: process.env.PGDATABASE || 'nodejs',
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5433,
    dialect: "postgres",
    logging: false,
  },
  "test": {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE_TEST,
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    dialect: "postgres",
    logging: false,
  },
  "production": {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    dialect: "postgres",
    logging: false,
  }
};
