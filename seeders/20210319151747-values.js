'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let valuesArray = [];
    Products.forEach(element => {
      valuesArray.push({
        id: element.options.values.id,
        options_id: element.options.values.options_id,
        values: element.options.values
      })
    })
    return await queryInterface.bulkInsert("Values", valuesArray);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Values", null);
  }
};
