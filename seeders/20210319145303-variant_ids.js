"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let variantIds = [];
    Products.forEach((element) => {
      element.images.variant_ids.forEach((e) => {
        if (element.images.variant_ids.length < 1) {
          variantIds.push("");
          return;
        }
        variantIds.push({
          id: e["id"],
          image_id: e["image_id"],
        });
      });
    });
    return await queryInterface.bulkInsert("Variant_ids", variantIds);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Variant_ids", null);
  },
};
