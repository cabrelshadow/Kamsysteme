"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      categorie_id: {
        type: Sequelize.INTEGER,
        /* references: {
          model: {
            tableName: "Categories",
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
    await queryInterface.addConstraint("Questions", {
      fields: ["categorie_id"],
      type: "foreign key",
      name: "fk_questions_categories",
      references: {
        table: "Categories",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Questions",
      "fk_questions_categories",
    );

    await queryInterface.dropTable("Questions");
  },
};
