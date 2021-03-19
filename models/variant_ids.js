"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Variant_ids extends Model {
    static associate(models) {
      Variant_ids.belongsTo(models.Image, {
        foreignKey: "image_id",
        as: "image",
      });
    }
  }
  Variant_ids.init(
    {
      id: DataTypes.INTEGER,
      image_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Image",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Variant_ids",
    }
  );
  return Variant_ids;
};
