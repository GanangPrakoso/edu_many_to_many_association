"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieActor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // kalo MANY TO MANY. ga perlu didefinisiin

      // DOUBLE ONE TO MANY
      MovieActor.belongsTo(models.Actor, {
        foreignKey: "actor_id",
      });

      MovieActor.belongsTo(models.Movie, {
        foreignKey: "movie_id",
      });
    }
  }
  MovieActor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: DataTypes.STRING,
      actor_id: DataTypes.INTEGER,
      movie_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MovieActor",
    }
  );
  return MovieActor;
};
