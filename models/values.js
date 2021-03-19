'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Values extends Model {
    static associate(models) {
     Values.belongsTo(models.Options, {
        foreignKey: "options_id",
        as: "option",
      });
    }
  };
  Values.init({
    id: DataTypes.INTEGER,
    options_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Options",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Values',
  });
  return Values;
};