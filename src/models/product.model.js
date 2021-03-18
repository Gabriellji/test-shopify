module.exports = (Sequelize, connector) => {
    const Product = connector.define('product', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body_html: {
            type: Sequelize.STRING,
            allowNull: false
        },
        vendor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        product_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        handle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tags: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true
    })
    return Product
}
