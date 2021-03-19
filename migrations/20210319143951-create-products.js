'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("SELECT * FROM Products")
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query("DROP TABLE Products");
  }
};