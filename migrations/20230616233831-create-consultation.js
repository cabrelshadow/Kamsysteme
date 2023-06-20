"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Consultations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_consultation: {
        type: Sequelize.STRING,
      },
      id_patient: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    // Add foreign key constraint
    await queryInterface.addConstraint("Consultations", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_consultation_users",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Consultations", {
      fields: ["id_patient"],
      type: "foreign key",
      name: "fk_patient_users",
      references: {
        table: "Patients",
        field: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("visiteurs", "fk_consultation_users");
    await queryInterface.removeConstraint("visiteurs", "fk_patient_users");
    await queryInterface.dropTable("Consultations");
  },
};
