const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    supplier: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    onTimePercent: { type: Number, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
