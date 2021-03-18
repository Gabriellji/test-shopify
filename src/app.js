const express = require("express");
const db = require("./db/db.client");
const productRouter = require("./routes/product.route");

const app = express();

db.connector
  .sync()
  .then(() => console.log("find current DB"))
  .catch((err) => console.error(`sync faild: ${err}`));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use("/", productRouter);

module.exports = app;
