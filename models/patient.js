'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     this.belongsToMany(models.Consultation,{
       through:models.Consultation
     })
    }
  }
  Patient.init({
    fullname: DataTypes.STRING,
    datenaissance: DataTypes.DATE,
    profession: DataTypes.STRING,
    situation_matrimonialle: DataTypes.STRING,
    domicile: DataTypes.STRING,
    contact: DataTypes.STRING,
    persone_urgence: DataTypes.STRING,
    appartenance_tribale: DataTypes.STRING,
    appartenance_religieuse: DataTypes.STRING,
    rang_fraterie: DataTypes.STRING,
    enfance: DataTypes.STRING,
    etude: DataTypes.STRING,
    conflits_familiaux_majeurs: DataTypes.TEXT,
    probleme_sante_majeur: DataTypes.STRING,
    fullname_pere: DataTypes.STRING,
    fullname_mere: DataTypes.STRING,
    age_mere: DataTypes.STRING,
    age_pere: DataTypes.STRING,
    profession_pere: DataTypes.STRING,
    profession_mere: DataTypes.STRING,
    etat_sante_pere: DataTypes.STRING,
    etat_sante_mere: DataTypes.STRING,
    situation_matrimoniale_parent: DataTypes.STRING,
    nature_relation_parent: DataTypes.STRING,
    relation_privilegier: DataTypes.STRING,
    frequence_parent_foyer: DataTypes.STRING,
    nbre_enfant_vivant: DataTypes.INTEGER,
    nbre_enfant_decede: DataTypes.INTEGER,
    nbre_amis: DataTypes.INTEGER,
    nbre_ami_vrai: DataTypes.INTEGER,
    nbre_amis_intime: DataTypes.INTEGER,
    nature_relation_ntourage: DataTypes.STRING,
    distraction: DataTypes.STRING,
    nature_relation_perso: DataTypes.STRING,
    anomalie: DataTypes.STRING,
    self_jugement: DataTypes.STRING,
    attente_avec_psychologue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};