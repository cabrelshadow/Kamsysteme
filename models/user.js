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
        foreignKey: "id_role",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Section, {
        foreignKey: "id_section",
        onDelete: "CASCADE",
      });
      this.hasMany(models.Visiteur, {
        foreignKey: "add_by",
        onDelete: "CASCADE",
      });
      this.hasMany(models.Consultation, {
        foreignKey: "user_id",
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
