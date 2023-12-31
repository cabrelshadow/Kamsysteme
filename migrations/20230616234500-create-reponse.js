"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reponses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reponse: {
        type: Sequelize.STRING,
      },
      consultation_id: {
        type: Sequelize.INTEGER,
        /*  references: {
          model: {
            tableName: "Consultations",
            schema: "schema",
          },
          key: "id",
        }, */
      },
      question_id: {
        type: Sequelize.INTEGER,
        /*  references: {
          model: {
            tableName: "Questions",
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

    // Add foreign key constraints
    await queryInterface.addConstraint("Reponses", {
      fields: ["consultation_id"],
      type: "foreign key",
      name: "fk_reponses_consultations",
      references: {
        table: "Consultations",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("Reponses", {
      fields: ["question_id"],
      type: "foreign key",
      name: "fk_reponses_questions",
      references: {
        table: "Questions",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    // Remove foreign key constraints
    await queryInterface.removeConstraint(
      "Reponses",
      "fk_reponses_consultations",
    );
    await queryInterface.removeConstraint("Reponses", "fk_reponses_questions");
    await queryInterface.dropTable("Reponses");
  },
};
