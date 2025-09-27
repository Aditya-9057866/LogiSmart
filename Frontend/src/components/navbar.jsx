import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
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
  <Link to="/signup" className="btn text-amber-50">SignUp</Link>
    </div>
  </div>
  )
}

export default Navbar
