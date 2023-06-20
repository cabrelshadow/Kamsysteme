'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Consultations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_consultation: {
        type: Sequelize.STRING
      },
      id_patient: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Patient",
            schema: "schema",
          },
          key: "id",
        },
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "User",
            schema: "schema",
          },
          key: "id",
        },
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
    await queryInterface.dropTable('Consultations');
  }
};