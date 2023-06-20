"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResultConsultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Consultation, {
        foreignKey: "consultation_id",
        onDelete: "CASCADE",
      });
    }
  }
  ResultConsultation.init(
    {
      resultat: DataTypes.TEXT,
      consultation_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ResultConsultation",
    },
  );
  return ResultConsultation;
};
