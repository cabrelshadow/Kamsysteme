"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Visiteur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "add_by",
        onDelete: "CASCADE",
      });
    }
  }
  Visiteur.init(
    {
      nom_visteur: DataTypes.STRING,
      cni: DataTypes.STRING,
      contact: DataTypes.INTEGER,
      add_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Visiteur",
    },
  );
  return Visiteur;
};
