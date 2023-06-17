"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Paitent, {
        foreignKey: "id_patient",
      });
      this.hasMany(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      this.belongsToMany(models.Medicament, {
        through: models.Prescription,
      });
      this.belongsTo(models.ResultConsultation, {
        foreignKey: "id_consultation",
      });
    }
  }
  Consultation.init(
    {
      nom_consultation: DataTypes.STRING,
      id_patient: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Consultation",
    },
  );
  return Consultation;
};
