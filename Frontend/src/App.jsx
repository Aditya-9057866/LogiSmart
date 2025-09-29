
import './App.css'
import Dashboard from './components/Dashboard'
import Drawer from './components/drawer'
import Navbar from './components/navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Orders from './components/Orders'
import Products from './components/Products'
import Shipments from './components/Shipments'
import Suppliers from './components/Suppliers'
import React, { useState } from 'react'



function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [user, setUser] = useState(() => {
    // Try to load user from localStorage for persistence
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const drawerWidth = drawerOpen ? 240 : 64;

  // Helper to update user and persist
  const handleSetUser = (userObj) => {
    setUser(userObj);
    if (userObj) {
      localStorage.setItem('user', JSON.stringify(userObj));
    } else {
      localStorage.removeItem('user');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar user={user} setUser={handleSetUser} />
      </div>
      {/* Fixed Drawer */}
      <div className="fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)]">
        <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
      </div>
      {/* Main Content Area */}
      <div
        className="pt-14"
        style={{ marginLeft: drawerWidth, transition: 'margin-left 0.3s' }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/signup" element={<Signup setUser={handleSetUser} />} />
          <Route path="/login" element={<Login setUser={handleSetUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;