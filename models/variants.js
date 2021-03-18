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
    id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    position: DataTypes.INTEGER,
    inventory_policy: DataTypes.STRING,
    compare_at_price: DataTypes.INTEGER,
    fulfillment_service: DataTypes.STRING,
    inventory_management: DataTypes.STRING,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    taxable: DataTypes.BOOLEAN,
    barcode: DataTypes.INTEGER,
    grams: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
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