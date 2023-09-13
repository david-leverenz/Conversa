// Setting up local database information using sequelize and dotenv
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize( //requiring variables from the .env folder
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: 3306,
      logging: false, // Disable query logging
      // logging: console.log // Enable Sequelize logging
    }
  );
}

module.exports = sequelize;