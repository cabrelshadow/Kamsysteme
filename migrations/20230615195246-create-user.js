"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
      },
      prenom: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      contact: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Roles",
            schema: "schema",
          },
          key: "id",
        },
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      id_section: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Sections",
            schema: "schema",
          },
          key: "id",
        },
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
    await queryInterface.dropTable("Users");
  },
};
