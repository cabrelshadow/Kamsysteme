'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.consultation,{
        foreignKey:"id_patient",
        onDelete:"CASCADE"
     })
      
    }
  }
  Consultation.init({
    nom_consultation: DataTypes.STRING,
     id_patient:DataTypes.INTEGER,
     

  }, {
    sequelize,
    modelName: 'Consultation',
  });
  return Consultation;
};