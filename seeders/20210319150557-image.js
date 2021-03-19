'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let imageArray = [];
    Products.forEach(element => {
      imageArray.push({
        id: element.image.id,
        product_id: element.image.product_id,
        position: element.image,
        created_at: element.image.position,
        updated_at: element.image.updated_at,
        alt: element.image.alt,
        width: element.image.width,
        height: element.image.height,
        src: element.image.src,
        variant_ids: [...element.image.variant_ids],
        admin_graphql_api_id: element.image.admin_graphql_api_id,
      })
    })
    return await queryInterface.bulkInsert('Image', imageArray)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Image', null)
  }
};
