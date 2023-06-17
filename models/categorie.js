"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Question, {
        foreignKey: "categorie_id",
      });
    }
  }
  Categorie.init(
    {
      nom_categorie: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categorie",
    },
  );
  return Categorie;
};
