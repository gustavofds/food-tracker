'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Isabela Sousa',
        email: 'isabela.sousa@gmail.com',
        password: '123456',
        heightInCm: 162,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
      },
      {
        name: 'Gustavo Sousa',
        email: 'gustavo.sousa@gmail.com',
        password: '123456',
        heightInCm: 184,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
      },
      {
        name: 'Karine Soares',
        email: 'karine.soares@gmail.com',
        password: '123456',
        heightInCm: 156,
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
