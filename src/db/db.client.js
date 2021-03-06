const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;
const Sequelize = require("sequelize");

const connector = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const authenticate = async (connector) => {
  try {
    await connector.authenticate();
    console.log("We are Connected!");
  } catch (err) {
    console.log(`Something failed on the DB connection: ${err}`);
  }
};

authenticate(connector);

const product = require("../models/product.model")(Sequelize, connector);

const db = {
  Sequelize,
  connector,
  product,
};

module.exports = db;
