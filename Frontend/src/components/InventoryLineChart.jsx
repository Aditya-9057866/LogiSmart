import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', inventory: 120 },
  { month: 'Feb', inventory: 110 },
  { month: 'Mar', inventory: 130 },
  { month: 'Apr', inventory: 125 },
  { month: 'May', inventory: 140 },
  { month: 'Jun', inventory: 135 },
  { month: 'Jul', inventory: 150 },
  { month: 'Aug', inventory: 145 },
  { month: 'Sep', inventory: 155 },
  { month: 'Oct', inventory: 160 },
  { month: 'Nov', inventory: 158 },
  { month: 'Dec', inventory: 170 },
];

const InventoryLineChart = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-10 text-black">
    <h2 className="text-xl font-semibold mb-4">Inventory Level vs Months</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="inventory" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default InventoryLineChart;
