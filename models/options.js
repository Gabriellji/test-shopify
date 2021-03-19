"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    static associate(models) {
      Options.belongsTo(models.Products, {
        foreignKey: "product_id",
        as: "product",
      });
      Options.hasOne(models.Values, { onDelete: "cascade" });
    }
  }
  Options.init(
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
      name: DataTypes.STRING,
      position: DataTypes.INTEGER,
      values: {
        type: DataTypes.ENUM,
        values: ["xs", "small", "medium", "large", "xl", "xxl"],
        references: {
          model: "Values",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Options",
    }
  );
  return Options;
};