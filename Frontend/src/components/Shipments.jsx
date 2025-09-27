import React from 'react';

const shipmentsData = [
  { id: 'SHP-2001', carrier: 'FedEx', destination: 'Chicago, IL', status: 'Delivered', date: '2025-09-20' },
  { id: 'SHP-2002', carrier: 'UPS', destination: 'Newark, NJ', status: 'In Transit', date: '2025-09-21' },
  { id: 'SHP-2003', carrier: 'DHL', destination: 'Los Angeles, CA', status: 'Delayed', date: '2025-09-22' },
  { id: 'SHP-2004', carrier: 'USPS', destination: 'Houston, TX', status: 'Delivered', date: '2025-09-23' },
  { id: 'SHP-2005', carrier: 'FedEx', destination: 'Miami, FL', status: 'In Transit', date: '2025-09-24' },
];

const statusColors = {
  Delivered: 'bg-green-100 text-green-800',
  'In Transit': 'bg-blue-100 text-blue-800',
  Delayed: 'bg-yellow-100 text-yellow-800',
};

const Shipments = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Shipments</h1>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow">Create Shipment</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow">Track Shipment</button>
        </div>
      </div>
      <div className="bg-white text-black p-6 rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Shipment ID</th>
              <th className="p-3">Carrier</th>
              <th className="p-3">Destination</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {shipmentsData.map(shipment => (
              <tr key={shipment.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{shipment.id}</td>
                <td className="p-3">{shipment.carrier}</td>
                <td className="p-3">{shipment.destination}</td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[shipment.status]}`}>{shipment.status}</span>
                </td>
                <td className="p-3">{shipment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shipments;
