const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    trackingId: { type: String, required: true, unique: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    carrier: { type: String, required: true },
    estDelivery: { type: Date, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);
module.exports = Shipment;
