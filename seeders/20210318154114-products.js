"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let productsArray = [];
    Products.forEach((product) => {
      productsArray.push({
        id: product["id"],
        title: product["title"],
        body_html: product["body_html"],
        vendor: product["body_html"],
        product_type: product["vendor"],
        created_at: new Date(),
        handle: product["handle"],
        updated_at: new Date(),
        published_at: new Date(),
        template_suffix: product["template_suffix"],
        status: product["status"],
        published_scope: product["published_scope"],
        tags: product["tags"],
        admin_graphql_api_id: product["admin_graphql_api_id"],
        variants: product["variants"],
        options: product["options"],
        images: product["images"],
        image: product["image"],
      });
      
    });

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
     return await queryInterface.bulkInsert('Products', productsArray)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete('Products', null)
  },
};
