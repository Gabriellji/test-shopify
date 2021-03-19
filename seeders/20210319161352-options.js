'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let optionsArray = [];
    Products.forEach((element) => {
      element.options.forEach((option) => {
        optionsArray.push({
          id: option["id"],
          product_id: option["product_id"],
          name: option["name"],
          position: option["position"],
          values: [...option.values],
        });
      });
    });
    return await queryInterface.bulkInsert('Options', optionsArray)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Options', null)
  }
};
