const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv')
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const productRoutes = require("./routes/ProductRoute");
const shipmentRoutes = require("./routes/shipmentRoute");
const supplierRoutes = require("./routes/SupplierRoute");

// app.use(cors());
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);
// MongoDB connection

const PORT = process.env.PORT || 5000;
connectDB();
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/product", productRoutes);
app.use("/api/shipment", shipmentRoutes);
app.use("/api/supplier", supplierRoutes);

app.get("/", (req, res) => {
  res.send("Logismart Backend API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
