"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Role, {
        foreignKey: "id_role",
        onDelete: "CASCADE",
      });
      this.hasOne(models.Section, {
        foreignKey: "id_section",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      contact: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      birthday: DataTypes.DATE,
      id_role: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      id_section: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
