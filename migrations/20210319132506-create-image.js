'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SELECT * FROM Image")
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("DROP TABLE Image");
  }
};