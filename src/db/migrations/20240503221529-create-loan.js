'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loan_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      return_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      memberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Members',
            key: 'id',
         }
      },
      copyId:{
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Copies',
            key: 'id',
         }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loans');
  }
};