const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

// Create a new order
router.post("/", createOrder);
// Get all orders
router.get("/", getOrders);
// Get an order by ID
router.get("/:id", getOrderById);
// Update an order by ID
router.put("/:id", updateOrder);
// Delete an order by ID
router.delete("/:id", deleteOrder);

module.exports = router;
