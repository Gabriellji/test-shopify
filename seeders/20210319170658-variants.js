'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = require("../src/data/products.json").products;
    let variantsArray = [];
    Products.forEach((element) => {
      element.variants.forEach((variant) => {
        variantsArray.push({
          id: variant["id"],
          product_id: variant["product_id"],
          title: variant["title"],
          price: variant["price"],
          sku: variant["sku"],
          position: variant["position"],
          inventory_policy: variant["inventory_policy"],
          compare_at_price: variant["compare_at_price"],
          fulfillment_service: variant["fulfillment_service"],
          inventory_management: variant["inventory_management"],
          option1: variant["option1"],
          option2: variant["option2"],
          option3: variant["option3"],
          created_at: variant["created_at"],
          updated_at: variant["updated_at"],
          taxable: variant["taxable"],
          barcode: variant["barcode"],
          grams: variant["grams"],
          image_id: variant["image_id"],
          weight: variant["weight"],
          weight_unit: variant["weight_unit"],
          inventory_item_id: variant["inventory_item_id"],
          inventory_quantity: variant["inventory_quantity"],
          old_inventory_quantity: variant["old_inventory_quantity"],
          requires_shipping: variant["requires_shipping"],
          admin_graphql_api_id: variant["admin_graphql_api_id"],
        });
      });
    });
    return await queryInterface.bulkInsert('Variants', variantsArray)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Variants', null)
  }
};
