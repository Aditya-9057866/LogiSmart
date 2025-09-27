
import './App.css'
import Dashboard from './components/Dashboard'
import Drawer from './components/drawer'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Orders from './components/Orders'
import Products from './components/Products'
import Shipments from './components/Shipments'
import Suppliers from './components/Suppliers'



function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const drawerWidth = drawerOpen ? 240 : 64;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
