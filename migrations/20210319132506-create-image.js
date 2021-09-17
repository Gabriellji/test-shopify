'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query("SELECT * FROM 'Image'", {
      type: queryInterface.sequelize.QueryTypes.SELECT
    })
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.sequelize.query("DROP TABLE Image");
  }
};