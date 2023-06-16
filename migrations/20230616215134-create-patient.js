'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      datenaissance: {
        type: Sequelize.DATE
      },
      profession: {
        type: Sequelize.STRING
      },
      situation_matrimonialle: {
        type: Sequelize.STRING
      },
      domicile: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      persone_urgence: {
        type: Sequelize.STRING
      },
      appartenance_tribale: {
        type: Sequelize.STRING
      },
      appartenance_religieuse: {
        type: Sequelize.STRING
      },
      rang_fraterie: {
        type: Sequelize.STRING
      },
      enfance: {
        type: Sequelize.STRING
      },
      etude: {
        type: Sequelize.STRING
      },
      conflits_familiaux_majeurs: {
        type: Sequelize.TEXT
      },
      probleme_sante_majeur: {
        type: Sequelize.STRING
      },
      fullname_pere: {
        type: Sequelize.STRING
      },
      fullname_mere: {
        type: Sequelize.STRING
      },
      age_mere: {
        type: Sequelize.STRING
      },
      age_pere: {
        type: Sequelize.STRING
      },
      profession_pere: {
        type: Sequelize.STRING
      },
      profession_mere: {
        type: Sequelize.STRING
      },
      etat_sante_pere: {
        type: Sequelize.STRING
      },
      etat_sante_mere: {
        type: Sequelize.STRING
      },
      situation_matrimoniale_parent: {
        type: Sequelize.STRING
      },
      nature_relation_parent: {
        type: Sequelize.STRING
      },
      relation_privilegier: {
        type: Sequelize.STRING
      },
      frequence_parent_foyer: {
        type: Sequelize.STRING
      },
      nbre_enfant_vivant: {
        type: Sequelize.INTEGER
      },
      nbre_enfant_decede: {
        type: Sequelize.INTEGER
      },
      nbre_amis: {
        type: Sequelize.INTEGER
      },
      nbre_ami_vrai: {
        type: Sequelize.INTEGER
      },
      nbre_amis_intime: {
        type: Sequelize.INTEGER
      },
      nature_relation_ntourage: {
        type: Sequelize.STRING
      },
      distraction: {
        type: Sequelize.STRING
      },
      nature_relation_perso: {
        type: Sequelize.STRING
      },
      anomalie: {
        type: Sequelize.STRING
      },
      self_jugement: {
        type: Sequelize.STRING
      },
      attente_avec_psychologue: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Patients');
  }
};