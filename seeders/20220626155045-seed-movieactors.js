'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let dataMovieActors = require("../data.json").MovieActors
    dataMovieActors.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('MovieActors', dataMovieActors)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MovieActors', null, {})
  }
};
