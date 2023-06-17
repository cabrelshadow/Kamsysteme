"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Prescriptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      medicament_id: {
        type: Sequelize.INTEGER,
        /* references: {
          model: {
            tableName: "Medicaments",
            schema: "schema",
          },
          key: "id",
        }, */
      },
      consultation_id: {
        type: Sequelize.INTEGER,
        /* references: {
          model: {
            tableName: "Consultations",
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
    await queryInterface.addConstraint("Prescriptions", {
      fields: ["consultation_id"],
      type: "foreign key",
      name: "fk_prescriptions_consultations",
      references: {
        table: "Consultations",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Prescriptions", {
      fields: ["medicament_id"],
      type: "foreign key",
      name: "fk_medicament_consultations",
      references: {
        table: "Medicaments",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Prescriptions",
      "fk_prescriptions_consultations",
    );
    await queryInterface.removeConstraint(
      "Prescriptions",
      "fk_medicament_consultations",
    );
    await queryInterface.dropTable("Prescriptions");
  },
};
