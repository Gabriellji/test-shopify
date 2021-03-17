const express = require("express");
const router = express.Router();
const db = require("../db/db.client");
const Product = db.product;

// GET all
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//POST create one
router.post("/", async (req, res) => {
  try {
    const { title, body_html, vendor, product_type, handle, tags } = req.body;
    const product = await Product.create({ ...req.body });
    res.status(201).json(product);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//PUT update one
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!product) {
        return res.status(204).json({ msg: "No content..." });
    }

    const updatedProduct = await Product.findByPk(req.params.id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// DELETE one
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.destroy({
            where: {
              id: req.params.id,
            }
          });
          if (!product) {
            return res.status(204).json({ msg: "No content..." });
        }
        res.status(200).json({ msg: "Deleted successfully" });

    } catch(err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
})

module.exports = router;
