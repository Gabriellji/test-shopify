'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Variants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      inventory_policy: {
        type: Sequelize.STRING
      },
      compare_at_price: {
        type: Sequelize.INTEGER
      },
      fulfillment_service: {
        type: Sequelize.STRING
      },
      inventory_management: {
        type: Sequelize.STRING
      },
      option1: {
        type: Sequelize.STRING
      },
      option2: {
        type: Sequelize.STRING
      },
      option3: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      taxable: {
        type: Sequelize.BOOLEAN
      },
      barcode: {
        type: Sequelize.INTEGER
      },
      grams: {
        type: Sequelize.INTEGER
      },
      image_id: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      weight_unit: {
        type: Sequelize.STRING
      },
      inventory_item_id: {
        type: Sequelize.INTEGER
      },
      inventory_quantity: {
        type: Sequelize.INTEGER
      },
      old_inventory_quantity: {
        type: Sequelize.INTEGER
      },
      requires_shipping: {
        type: Sequelize.BOOLEAN
      },
      admin_graphql_api_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Variants');
  }
};