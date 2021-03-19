'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Variants.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
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
      allowNull: true
    },
    fulfillment_service: DataTypes.STRING,
    inventory_management: DataTypes.STRING,
    oprion1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    option2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    oprion3: {
      type: DataTypes.STRING,
      allowNull: true
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
      allowNull: true
    },
    grams: DataTypes.INTEGER,
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: DataTypes.INTEGER,
    weight_unit: DataTypes.STRING,
    inventory_item_id: DataTypes.INTEGER,
    inventory_quantity: DataTypes.INTEGER,
    old_inventory_quantity: DataTypes.INTEGER,
    requires_shipping: DataTypes.BOOLEAN,
    admin_graphql_api_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Variants',
  });
  return Variants;
};