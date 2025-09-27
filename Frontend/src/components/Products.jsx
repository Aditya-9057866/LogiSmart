import React from 'react';

const inventoryData = [
  { sku: '#WD-500-SSD', product: '500GB NVMe SSD', warehouse: 'Chicago, IL', stock: '5,210 units', status: 'In Stock' },
  { sku: '#RTX-4090-OC', product: 'GeForce RTX 4090 OC', warehouse: 'Newark, NJ', stock: '85 units', status: 'Low Stock' },
  { sku: '#LOGI-MX-M3', product: 'Logitech MX Master 3', warehouse: 'Los Angeles, CA', stock: '0 units', status: 'Out of Stock' },
  { sku: '#INT-i9-14K', product: 'Intel Core i9-14900K', warehouse: 'Chicago, IL', stock: '1,500 units', status: 'In Stock' },
  { sku: '#SAM-EVO-1TB', product: 'Samsung 980 Pro 1TB', warehouse: 'Newark, NJ', stock: '3,205 units', status: 'In Stock' },
];

const Products = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products Inventory</h1>
        <div className="flex gap-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => { /* Add item logic here */ }}
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
            {inventoryData.map(item => (
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
