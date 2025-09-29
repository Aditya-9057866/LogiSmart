const express = require("express");
const router = express.Router();
const {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

// Create a new supplier
router.post("/", createSupplier);
// Get all suppliers
router.get("/", getSuppliers);
// Get a supplier by ID
router.get("/:id", getSupplierById);
// Update a supplier by ID
router.put("/:id", updateSupplier);
// Delete a supplier by ID
router.delete("/:id", deleteSupplier);

module.exports = router;
