"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.hasMany(models.Variants, { onDelete: "cascade" });
      Products.hasMany(models.Options, { onDelete: "cascade" });
      Products.hasMany(models.Images, { onDelete: "cascade" });
      Products.hasOne(models.Image, { onDelete: "cascade" });
    }
  }
  Products.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      title: DataTypes.STRING,
      body_html: DataTypes.STRING,
      vendor: DataTypes.STRING,
      product_type: DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      handle: DataTypes.STRING,
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      published_at: DataTypes.DATE,
      template_suffix: DataTypes.INTEGER,
      status: DataTypes.STRING,
      published_scope: DataTypes.STRING,
      tags: DataTypes.STRING,
      admin_graphql_api_id: DataTypes.STRING,
      variants: {
        type: DataTypes.INTEGER,
        references: {
          model: "Variants",
          key: "product_id"
        }
      },
      options: {
        type: DataTypes.INTEGER,
        references: {
          model: "Options",
          key: "product_id"
        }
      },
      images: {
        type: DataTypes.INTEGER,
        references: {
          model: "Images",
          key: "product_id"
        }
      },
      image: {
        type: DataTypes.INTEGER,
        references: {
          model: "Image",
          key: "product_id"
        }
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
