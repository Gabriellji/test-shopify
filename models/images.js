"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.Products, {
        foreignKey: "product_id",
        as: "product",
      });
      Images.hasOne(models.Variant_ids, { onDelete: "cascade" });
    }
  }
  Images.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
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
      modelName: "Images",
    }
  );
  return Images;
};
