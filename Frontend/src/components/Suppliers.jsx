import React, { useState } from 'react';
import axios from 'axios';

const suppliersData = [
  { id: 'SUP-3001', name: 'Tech Distributors Inc.', location: 'Chicago, IL', category: 'Electronics', contact: 'techdistr@gmail.com', status: 'Active' },
  { id: 'SUP-3002', name: 'Gadget Supply Co.', location: 'Newark, NJ', category: 'Gadgets', contact: 'gadgetco@gmail.com', status: 'Active' },
  { id: 'SUP-3003', name: 'Peripheral Partners', location: 'Los Angeles, CA', category: 'Peripherals', contact: 'peripartners@gmail.com', status: 'Inactive' },
  { id: 'SUP-3004', name: 'Component World', location: 'Houston, TX', category: 'Components', contact: 'compworld@gmail.com', status: 'Active' },
  { id: 'SUP-3005', name: 'Chipset Solutions', location: 'Miami, FL', category: 'Chips', contact: 'chipsetsol@gmail.com', status: 'Inactive' },
];

const statusColors = {
  Active: 'bg-green-100 text-green-800',
  Inactive: 'bg-red-100 text-red-800',
};

const Suppliers = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ supplier: '', category: '', rating: '', onTimePercent: '', contact: '', location: '' });
  const [suppliers, setSuppliers] = useState(suppliersData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/supplier', form);
      const newSupplier = response.data;
      setSuppliers([...suppliers, {
        id: newSupplier._id,
        name: newSupplier.supplier,
        location: newSupplier.location,
        category: newSupplier.category,
        rating: newSupplier.rating,
        onTimePercent: newSupplier.onTimePercent,
        contact: newSupplier.contact,
        status: 'Active',
      }]);
      setShowModal(false);
      setForm({ supplier: '', category: '', rating: '', onTimePercent: '', contact: '', location: '' });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add supplier');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
          onClick={() => setShowModal(true)}
        >
          Add Supplier
        </button>
      </div>

      {/* Modal for Add Supplier */}
      {showModal && (
        <div className="fixed inset-0 flex  text-black items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Add Supplier</h2>
            {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Supplier Name</label>
                <input type="text" name="supplier" value={form.supplier} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Location</label>
                <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <input type="text" name="category" value={form.category} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Rating</label>
                <input type="number" name="rating" value={form.rating} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">On-Time %</label>
                <input type="number" name="onTimePercent" value={form.onTimePercent} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Contact</label>
                <input type="text" name="contact" value={form.contact} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Supplier'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white text-black p-6 rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Supplier ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Category</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map(supplier => (
              <tr key={supplier.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{supplier.id}</td>
                <td className="p-3">{supplier.name || supplier.supplier}</td>
                <td className="p-3">{supplier.location || ''}</td>
                <td className="p-3">{supplier.category}</td>
                <td className="p-3">{supplier.contact}</td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[supplier.status]}`}>{supplier.status || 'Active'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppliers;
