const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

router.get("/", async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
});

router.post("/", async (req, res) => {
  const { name, category, price, availability } = req.body;
  const newMenuItem = new Menu({ name, category, price, availability });

  await newMenuItem.save();
  res.status(201).json({ message: "Menu item added successfully" });
});

module.exports = router;
