'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let dataMovies = require("../data.json").Movies
    dataMovies.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Movies', dataMovies)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {})
  }
};
