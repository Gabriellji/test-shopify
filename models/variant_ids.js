'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variant_ids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Variant_ids.init({
    id: DataTypes.INTEGER,
    image_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Image",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Variant_ids',
  });
  return Variant_ids;
};