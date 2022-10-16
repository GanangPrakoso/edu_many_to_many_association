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
      // describe assocation here
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
