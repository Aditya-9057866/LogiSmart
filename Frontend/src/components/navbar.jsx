
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center justify-between">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">LogiSmart</a>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen((v) => !v)} className="btn text-amber-50 flex items-center gap-2">
              <span className="font-semibold">{user.name || user.email}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signup" className="btn text-amber-50">SignUp</Link>
            <Link to="/login" className="btn text-amber-50">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
