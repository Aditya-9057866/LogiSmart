import React, { useState } from 'react';
import axios from 'axios';

const inventoryData = [
  { sku: '#WD-500-SSD', product: '500GB NVMe SSD', warehouse: 'Chicago, IL', stock: '5,210 units', status: 'In Stock' },
  { sku: '#RTX-4090-OC', product: 'GeForce RTX 4090 OC', warehouse: 'Newark, NJ', stock: '85 units', status: 'Low Stock' },
  { sku: '#LOGI-MX-M3', product: 'Logitech MX Master 3', warehouse: 'Los Angeles, CA', stock: '0 units', status: 'Out of Stock' },
  { sku: '#INT-i9-14K', product: 'Intel Core i9-14900K', warehouse: 'Chicago, IL', stock: '1,500 units', status: 'In Stock' },
  { sku: '#SAM-EVO-1TB', product: 'Samsung 980 Pro 1TB', warehouse: 'Newark, NJ', stock: '3,205 units', status: 'In Stock' },
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ sku: '', product: '', warehouse: '', stock: '', status: '' });
  const [products, setProducts] = useState(inventoryData);
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
      const response = await axios.post('http://localhost:5000/api/product', form);
      const newProduct = response.data;
      setProducts([...products, {
        sku: newProduct.sku,
        product: newProduct.product,
        warehouse: newProduct.warehouse,
        stock: newProduct.stock,
        status: newProduct.status,
      }]);
      setShowModal(false);
      setForm({ sku: '', product: '', warehouse: '', stock: '', status: '' });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products Inventory</h1>
        <div className="flex gap-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowModal(true)}
          >
            Add New Item
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => { /* AI recommendation logic here */ }}
          >
            AI Recommendation
          </button>
        </div>
      </div>

      {/* Modal for Add New Item */}
      {showModal && (
        <div className="fixed inset-0 flex items-center text-black justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">SKU</label>
                <input type="text" name="sku" value={form.sku} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Product</label>
                <input type="text" name="product" value={form.product} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Warehouse</label>
                <input type="text" name="warehouse" value={form.warehouse} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Stock</label>
                <input type="text" name="stock" value={form.stock} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Status</label>
                <input type="text" name="status" value={form.status} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white text-black p-6 rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">SKU</th>
              <th className="p-3">Product</th>
              <th className="p-3">Warehouse</th>
              <th className="p-3">Stock Level</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map(item => (
              <tr key={item.sku} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{item.sku}</td>
                <td className="p-3">{item.product}</td>
                <td className="p-3">{item.warehouse}</td>
                <td className="p-3">{item.stock}</td>
                <td className="p-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full text-black
                      ${item.status === 'In Stock' ? 'bg-green-100' : ''}
                      ${item.status === 'Low Stock' ? 'bg-yellow-100' : ''}
                      ${item.status === 'Out of Stock' ? 'bg-red-100' : ''}
                    `}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
