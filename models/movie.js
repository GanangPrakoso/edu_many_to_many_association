"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // MANY TO MANY
      Movie.belongsToMany(models.Actor, {
        through: models.MovieActor,
        foreignKey: "movie_id",
      });
      // DOUBLE ONE TO MANY
      // Movie.hasMany(models.MovieActor, {
      //   foreignKey: "movie_id",
      //   as: "Roles",
      // });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      release_date: DataTypes.DATE,
      cover_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
