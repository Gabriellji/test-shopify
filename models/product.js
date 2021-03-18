"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      body_html: DataTypes.STRING,
      vendor: DataTypes.STRING,
      product_type: DataTypes.STRING,
      created_at: DataTypes.DATE,
      handle: DataTypes.STRING,
      updated_at: DataTypes.DATE,
      published_at: DataTypes.DATE,
      template_suffix: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: DataTypes.STRING,
      published_scope: DataTypes.STRING,
      tags: DataTypes.STRING,
      admin_graphql_api_id: DataTypes.STRING,
      variants: {
        references: {
          model: Variants,
          key: "product_id"
        },
      },
      options: {
        references: {
          model: Options,
          key: "product_id"
        },
      },
      images: {
        references: {
          model: Images,
          key: "product_id"
        },
      },
      image: {
        references: {
          model: Image,
          key: "id"
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
