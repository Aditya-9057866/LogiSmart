const express = require("express");
const router = express.Router();
const {
  createShipment,
  getShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
} = require("../controllers/shipmentController");

// Create a new shipment
router.post("/", createShipment);
// Get all shipments
router.get("/", getShipments);
// Get a shipment by tracking ID
router.get("/:trackingId", getShipmentById);
// Update a shipment by tracking ID
router.put("/:trackingId", updateShipment);
// Delete a shipment by tracking ID
router.delete("/:trackingId", deleteShipment);

module.exports = router;
