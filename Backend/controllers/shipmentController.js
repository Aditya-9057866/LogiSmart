const Shipment = require("../models/shipmentModel");

// Create a new shipment
const createShipment = async (req, res) => {
  try {
    const { trackingId, origin, destination, carrier, estDelivery, status } =
      req.body;
    if (
      !trackingId ||
      !origin ||
      !destination ||
      !carrier ||
      !estDelivery ||
      !status
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const shipment = new Shipment({
      trackingId,
      origin,
      destination,
      carrier,
      estDelivery,
      status,
    });
    const savedShipment = await shipment.save();
    res.status(201).json(savedShipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all shipments
const getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a shipment by tracking ID
const getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({
      trackingId: req.params.trackingId,
    });
    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a shipment by tracking ID
const updateShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOneAndUpdate(
      { trackingId: req.params.trackingId },
      req.body,
      { new: true }
    );
    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a shipment by tracking ID
const deleteShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOneAndDelete({
      trackingId: req.params.trackingId,
    });
    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found." });
    }
    res.status(200).json({ message: "Shipment deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createShipment,
  getShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
};
