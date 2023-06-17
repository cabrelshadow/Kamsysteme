"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Question, {
        foreignKey: "question_id",
        onDelete: "CASCADE",
      });
      this.hasOne(models.Consultation, {
        foreignKey: "consultation_id",
        onDelete: "CASCADE",
      });
    }
  }
  Reponse.init(
    {
      reponse: DataTypes.STRING,
      question_id: DataTypes.INTEGER,
      consultation_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reponse",
    },
  );
  return Reponse;
};
