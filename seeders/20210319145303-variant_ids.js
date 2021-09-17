"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let variantIds = [];
    Products.forEach(element => {
      element.images.forEach(el => {
        el.variant_ids.forEach(e => {
          variantIds.push({
            id: e["id"],
            image_id: e["image_id"],
          });
        });
      });
    });
    return await queryInterface.bulkInsert("Variant_ids", variantIds);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Variant_ids", null);
  },
};
