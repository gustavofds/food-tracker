'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      calories: {
        type: Sequelize.INTEGER,
      },
      protein: {
        type: Sequelize.INTEGER,
      },
      carb: {
        type: Sequelize.INTEGER,
      },
      fat: {
        type: Sequelize.INTEGER,
      },
      servingSize: {
        type: Sequelize.INTEGER,
      },
      servingUnit: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Food');
  },
};
