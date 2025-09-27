import React from 'react';

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
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow">Create Order</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow">AI Predict Delay</button>
        </div>
      </div>
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
            {ordersData.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{order.id}</td>
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
