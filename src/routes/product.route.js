const express = require("express");
const router = express.Router();
const db = require("../db/db.client");
const { product: Product } = db;
const {
  SERVER_ERROR,
  NOT_FOUND,
  CREATED,
  OK,
  NO_CONTENT,
} = require("../common/constants/httpCodes");
const {
  SERVER_ERROR_MSG,
  NOT_FOUND_MSG,
  OK_MSG,
  NO_CONTENT_MSG,
} = require("../common/constants/errorMessages");

// Public
// GET all
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

// Public
// GET by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(NOT_FOUND).json({ msg: NOT_FOUND_MSG });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

// Public
// POST create one
router.post("/", async (req, res) => {
  try {
    const { title, body_html, vendor, product_type, handle, tags } = req.body;
    const product = await Product.create({
      title,
      body_html,
      vendor,
      product_type,
      handle,
      tags,
    });
    res.status(CREATED).json(product);
  } catch (err) {
    console.error(err.message);
    return res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

// Public
// PUT update one
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );
    if (!product) {
      return res.status(NO_CONTENT).json({ msg: NO_CONTENT_MSG });
    }
    res.status(OK).json(product);
  } catch (err) {
    console.error(err.message);
    return res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

// Public
// DELETE one
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      return res.status(NO_CONTENT).json({ msg: NO_CONTENT_MSG });
    }
    res.status(OK).json({ msg: OK_MSG });
  } catch (err) {
    console.error(err.message);
    return res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
});

module.exports = router;
