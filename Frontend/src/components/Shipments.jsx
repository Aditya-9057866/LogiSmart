import React, { useState } from 'react';
import axios from 'axios';

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
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ trackingId: '', origin: '', destination: '', carrier: '', estDelivery: '', status: '' });
  const [shipments, setShipments] = useState(shipmentsData);
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
      const response = await axios.post('http://localhost:5000/api/shipment', form);
      const newShipment = response.data;
      setShipments([...shipments, {
        id: newShipment.trackingId,
        carrier: newShipment.carrier,
        destination: newShipment.destination,
        status: newShipment.status,
        date: newShipment.estDelivery ? newShipment.estDelivery.slice(0, 10) : '',
      }]);
      setShowModal(false);
      setForm({ trackingId: '', origin: '', destination: '', carrier: '', estDelivery: '', status: '' });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to create shipment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Shipments</h1>
        <div className="flex gap-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowModal(true)}
          >
            Create Shipment
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow">Track Shipment</button>
        </div>
      </div>

      {/* Modal for Create Shipment */}
      {showModal && (
        <div className="fixed inset-0 flex items-cente text-black justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Create Shipment</h2>
            {error && <div className="mb-2 text-red-600 text-center">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Tracking ID</label>
                <input type="text" name="trackingId" value={form.trackingId} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Origin</label>
                <input type="text" name="origin" value={form.origin} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Destination</label>
                <input type="text" name="destination" value={form.destination} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Carrier</label>
                <input type="text" name="carrier" value={form.carrier} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Est. Delivery</label>
                <input type="date" name="estDelivery" value={form.estDelivery} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Status</label>
                <input type="text" name="status" value={form.status} onChange={handleChange} className="w-full border rounded px-3 py-2 text-black" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Shipment'}
              </button>
            </form>
          </div>
        </div>
      )}

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
            {shipments.map(shipment => (
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
