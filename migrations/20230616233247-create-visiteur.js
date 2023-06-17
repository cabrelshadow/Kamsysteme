"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Visiteurs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_visteur: {
        type: Sequelize.STRING,
      },
      cni: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.INTEGER,
      },
      add_by: {
        type: Sequelize.INTEGER,
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

    // Add foreign key constraint
    await queryInterface.addConstraint("Visiteurs", {
      fields: ["add_by"],
      type: "foreign key",
      name: "fk_visiteurs_users",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("visiteurs", "fk_visiteurs_users");
    await queryInterface.dropTable("visiteurs");
  },
};
