"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Options.init(
    {
      id: DataTypes.INTEGER,
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      name: DataTypes.STRING,
      position: DataTypes.INTEGER,
      values: {
        values: ["xs", "small", "medium", "large", "xl", "xxl"],
      },
    },
    {
      sequelize,
      modelName: "Options",
    }
  );
  return Options;
};
