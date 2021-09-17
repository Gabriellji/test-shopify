'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SELECT * FROM Values")
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("DROP TABLE Values");
  }
};