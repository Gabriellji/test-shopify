"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let imagesArray = [];
    Products.forEach((element) => {
      element.images.forEach((img) => {
        imagesArray.push({
          id: img["id"],
          position: img["position"],
          created_at: img["created_at"],
          updated_at: img["updated_at"],
          alt: img["alt"],
          width: img["width"],
          height: img["height"],
          src: img["src"],
          variant_ids: [...img.variant_ids],
          admin_graphql_api_id: img["admin_graphql_api_id"],
        });
      });
    });
    return await queryInterface.bulkInsert("Images", imagesArray);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Images", null);
  },
};
