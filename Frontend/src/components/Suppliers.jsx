import React from 'react';

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
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow">Add Supplier</button>
      </div>
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
            {suppliersData.map(supplier => (
              <tr key={supplier.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{supplier.id}</td>
                <td className="p-3">{supplier.name}</td>
                <td className="p-3">{supplier.location}</td>
                <td className="p-3">{supplier.category}</td>
                <td className="p-3">{supplier.contact}</td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[supplier.status]}`}>{supplier.status}</span>
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
