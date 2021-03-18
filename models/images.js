'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Images.init({
    id: DataTypes.INTEGER,
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id"
      }
    },
    position: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    alt: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    src: DataTypes.STRING,
    vatiant_ids: {
      values: []
    },
    admin_graphql_api_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};