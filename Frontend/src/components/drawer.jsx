
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

	const Drawer = () => {
		return (
			<div className="fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-60 bg-gray-900 text-white shadow-lg z-50 transition-all duration-300">
				<div className="p-4">
					<ul className="list-none space-y-2 pl-0">
						<li>
							<Link to="/" className="hover:bg-gray-800 rounded px-2 py-1 cursor-pointer flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
								</svg>
								Dashboard
							</Link>
						</li>
						<li>
							<Link to="/orders" className="hover:bg-gray-800 rounded px-2 py-1 cursor-pointer flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6m-6-4h6m2 7H7a2 2 0 01-2-2V5a2 2 0 012-2h3.28a2 2 0 001.44-.67l.6-.66a2 2 0 012.76 0l.6.66A2 2 0 0017.72 3H21a2 2 0 012 2v14a2 2 0 01-2 2z" />
								</svg>
								Orders
							</Link>
						</li>
						<li>
							<Link to="/products" className="hover:bg-gray-800 rounded px-2 py-1 cursor-pointer flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0v6a8 8 0 11-16 0V7m16 0L12 13 4 7" />
								</svg>
								Products
							</Link>
						</li>
						<li>
							<Link to="/shipments" className="hover:bg-gray-800 rounded px-2 py-1 cursor-pointer flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h6a2 2 0 012 2v6m-2 4a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4zm0 0H5a2 2 0 01-2-2V7a2 2 0 012-2h2" />
								</svg>
								Shipment
							</Link>
						</li>
						<li>
							<Link to="/suppliers" className="hover:bg-gray-800 rounded px-2 py-1 cursor-pointer flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 10-8 0 4 4 0 008 0zm6 8v-2a4 4 0 00-3-3.87M6 6a4 4 0 110-8 4 4 0 010 8z" />
								</svg>
								Suppliers
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	};
export default Drawer;