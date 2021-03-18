'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body_html: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      product_type: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      handle: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.DATE
      },
      published_at: {
        type: Sequelize.DATE
      },
      template_suffix: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      published_scope: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      admin_graphql_api_id: {
        type: Sequelize.STRING
      },
      variants: {
        type: Sequelize.JSON
      },
      options: {
        type: Sequelize.JSON
      },
      images: {
        type: Sequelize.JSON
      },
      image: {
        type: Sequelize.JSON
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
    await queryInterface.dropTable('Products');
  }
};