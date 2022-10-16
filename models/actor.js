"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // MANY TO MANY
      Actor.belongsToMany(models.Movie, {
        through: models.MovieActor,
        foreignKey: "actor_id",
      });
      // DOUBLE ONE TO MANY
      // Actor.hasMany(models.MovieActor, {
      //   foreignKey: "actor_id",
      // });
    }
  }
  Actor.init(
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      profile_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Actor",
    }
  );
  return Actor;
};
