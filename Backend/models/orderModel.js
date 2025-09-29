const { timeStamp } = require("console")
const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
  orderId: { type: String, required: true },
  customer: { type: String, required: true },
  product: { type: String, required: true },
  status: { type: String, required: true },
  total: { type: String, required: true },
},
  {
    timeStamps: true,
  });
const Order = mongoose.model("Order", orderSchema)
module.exports = Order;