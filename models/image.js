"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
      Image.hasOne(models.Variant_ids, { onDelete: "cascade" });
    }
  }
  Image.init(
    {
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
      position: DataTypes.INTEGER,
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      alt: DataTypes.STRING,
      width: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      src: DataTypes.STRING,
      variant_ids: {
        type: DataTypes.INTEGER,
        references: {
          model: "Variant_ids",
          key: "id",
        },
      },
      admin_graphql_api_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
