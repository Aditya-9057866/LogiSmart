const { timeStamp } = require("console");
const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    product: { type: String, required: true },
    warehouse: { type: String, required: true },
    stock: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
