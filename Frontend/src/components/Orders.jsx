
import React, { useState } from 'react';
import axios from 'axios';

const ordersData = [
  { id: 'ORD-1001', customer: 'John Doe', product: '500GB NVMe SSD', status: 'Shipped', total: '$1,200.00' },
  { id: 'ORD-1002', customer: 'Jane Smith', product: 'GeForce RTX 4090 OC', status: 'Pending', total: '$850.00' },
  { id: 'ORD-1003', customer: 'Acme Corp', product: 'Logitech MX Master 3', status: 'Processing', total: '$2,500.00' },
  { id: 'ORD-1004', customer: 'Globex Inc.', product: 'Intel Core i9-14900K', status: 'Cancelled', total: '$0.00' },
  { id: 'ORD-1005', customer: 'Wayne Enterprises', product: 'Samsung 980 Pro 1TB', status: 'Shipped', total: '$3,100.00' },
];

const statusColors = {
  Shipped: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Processing: 'bg-blue-100 text-blue-800',
  Cancelled: 'bg-red-100 text-red-800',
};


const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ orderId: '', customer: '', product: '', status: '', total: '' });
  const [orders, setOrders] = useState(ordersData);
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
      const response = await axios.post('http://localhost:5000/api/order', form);
      const newOrder = response.data;
      setOrders([...orders, {
        id: newOrder.orderId,
        customer: newOrder.customer,
        product: newOrder.product,
        status: newOrder.status,
        total: newOrder.total,
      }]);
      setShowModal(false);
      setForm({ orderId: '', customer: '', product: '', status: '', total: '' });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowModal(true)}
          >
            Create Order
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow">AI Predict Delay</button>
        </div>
      </div>

      {/* Modal for Create Order */}
      {showModal && (
        <div className="fixed inset-0 flex items-cente text-black justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Create Order</h2>
            {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Order ID</label>
                <input type="text" name="orderId" value={form.orderId} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Customer</label>
                <input type="text" name="customer" value={form.customer} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Product</label>
                <input type="text" name="product" value={form.product} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Status</label>
                <input type="text" name="status" value={form.status} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Total</label>
                <input type="text" name="total" value={form.total} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Order'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white text-black p-6 rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Product</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id || order.orderId} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{order.id || order.orderId}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[order.status]}`}>{order.status}</span>
                </td>
                <td className="p-3">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
