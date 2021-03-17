module.exports = (Sequelize, connector) => {
    const Product = connector.define('product', {
        title: Sequelize.STRING,
        body_html: Sequelize.STRING,
        vendor: Sequelize.STRING,
        product_type: Sequelize.STRING,
        handle: Sequelize.STRING,
        tags: Sequelize.STRING
    }, {
        timestamps: true
    })
    return Product
}


// import { DataTypes, Model, Sequelize } from "sequelize";

// class Product extends Model {}

// Product.init(
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     body_html: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     vendor: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     product_type: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     handle: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     tags: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     Sequelize,
//     modelName: "product",
//     timestamps: true,
//   }
// );

// "id": 6573458653381,
// "title": "Blue Silk Tuxedo",
// "body_html": "<p>Blue silk tuxedo with marbled aquatic pattern and dark lining. Sleeves are complete with rounded hem and black buttons.</p>",
// "vendor": "Liam Fashions",
// "product_type": "",
// "created_at": "2021-03-16T19:54:24+03:00",
// "handle": "blue-silk-tuxedo",
// "updated_at": "2021-03-16T19:54:24+03:00",
// "published_at": "2021-03-16T19:54:23+03:00",
// "template_suffix": null,
// "status": "active",
// "published_scope": "web",
// "tags": "men",
// "admin_graphql_api_id": "gid://shopify/Product/6573458653381",
