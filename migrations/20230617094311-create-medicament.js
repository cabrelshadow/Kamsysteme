"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Medicaments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
      },
      prix: {
        type: Sequelize.INTEGER,
      },
      date_expiration: {
        type: Sequelize.DATE,
      },
      quantite: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        /* references: {
          model: {
            tableName: "User",
            schema: "schema",
          },
          key: "id",
        }, */
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
    await queryInterface.addConstraint("Medicaments", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_user_medicamment",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Medicaments", "fk_user_medicamment");
    await queryInterface.dropTable("Medicaments");
  },
};
