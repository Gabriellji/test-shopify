'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SELECT * FROM Variants")
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("DROP TABLE Variants");
  }
};