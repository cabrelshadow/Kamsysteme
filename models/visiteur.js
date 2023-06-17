'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visiteur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  visiteur.init({
    nom_visteur: DataTypes.STRING,
    cni: DataTypes.STRING,
    contact: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'visiteur',
  });
  return visiteur;
};