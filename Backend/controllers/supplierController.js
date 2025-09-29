const Supplier = require("../models/supplierModel");

// Create a new supplier
const createSupplier = async (req, res) => {
  try {
    const { supplier, category, rating, onTimePercent, contact, location } =
      req.body;
    if (
      !supplier ||
      !category ||
      rating == null ||
      onTimePercent == null ||
      !contact ||
      !location
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newSupplier = new Supplier({
      supplier,
      category,
      rating,
      onTimePercent,
      contact,
      location,
    });
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all suppliers
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a supplier by ID
const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found." });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a supplier by ID
const updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found." });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a supplier by ID
const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found." });
    }
    res.status(200).json({ message: "Supplier deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
};
