const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, items } = req.body;
  let totalAmount = 0;

  for (const item of items) {
    totalAmount += item.price * item.quantity;
  }

  const order = new Order({ userId, items, totalAmount });
  await order.save();

  res.status(201).json({ message: "Order placed successfully" });
});

router.get("/", async (req, res) => {
  const { userId } = req.query;
  const orders = await Order.find({ userId }).populate("items.menuItem");
  res.json(orders);
});

module.exports = router;
