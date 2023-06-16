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
      this.belongsTo(models.Role, {
        foreignKey: "role",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Section, {
        foreignKey: "role",
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
      role: DataTypes.INTEGER,
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
