"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Variants extends Model {
    static associate(models) {
      Variants.belongsTo(models.Products, {
        foreignKey: "product_id",
        as: "product",
      });
    }
  }
  Variants.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      sku: DataTypes.STRING,
      position: DataTypes.INTEGER,
      inventory_policy: DataTypes.STRING,
      compare_at_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fulfillment_service: DataTypes.STRING,
      inventory_management: DataTypes.STRING,
      oprion1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      option2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      oprion3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      taxable: DataTypes.BOOLEAN,
      barcode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      grams: DataTypes.INTEGER,
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: DataTypes.INTEGER,
      weight_unit: DataTypes.STRING,
      inventory_item_id: DataTypes.INTEGER,
      inventory_quantity: DataTypes.INTEGER,
      old_inventory_quantity: DataTypes.INTEGER,
      requires_shipping: DataTypes.BOOLEAN,
      admin_graphql_api_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Variants",
    }
  );
  return Variants;
};
