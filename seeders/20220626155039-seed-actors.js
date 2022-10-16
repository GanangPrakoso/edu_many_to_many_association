"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let dataActors = require("../data.json").Actors;
    dataActors.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Actors", dataActors);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Actors", null, {});
  },
};
