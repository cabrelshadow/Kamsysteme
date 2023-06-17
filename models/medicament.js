"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medicament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Consultation, {
        through: models.Prescription,
      });
    }
  }
  Medicament.init(
    {
      nom: DataTypes.STRING,
      prix: DataTypes.INTEGER,
      date_expiration: DataTypes.DATE,
      quantite: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Medicament",
    },
  );
  return Medicament;
};
