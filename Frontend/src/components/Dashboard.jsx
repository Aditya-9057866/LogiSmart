import React from 'react'
import InventoryLineChart from './InventoryLineChart';


const stats = [
  { label: 'Total Inventory', value: 120, color: 'bg-blue-500' },
  { label: 'Pending Orders', value: 58, color: 'bg-green-500' },
  { label: 'Orders Shipped', value: 34, color: 'bg-yellow-500' },
  { label: 'Suppliers', value: 12, color: 'bg-purple-500' },
];

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg shadow-md p-6 flex flex-col items-center text-white ${stat.color}`}
          >
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-lg font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Inventory Level vs Months Graph */}
      <InventoryLineChart />
    </div>
  );
};

export default Dashboard