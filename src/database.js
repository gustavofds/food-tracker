const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'food-tracker',
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
  }
);

module.exports = sequelize;
