'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SELECT * FROM Variant_ids")
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("DROP TABLE Variant_ids");
  }
};