import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-900 shadow-sm bg-[#0d0d3a]/95 backdrop-blur-lg">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-lg shadow-lg bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-500">
            BF
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-white">Book Finder</h1>
            <p className="text-sm text-gray-300">Discover books fast</p>
          </div>
        </div>

        <nav className="items-center hidden gap-6 font-bold md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-indigo-300 ${
                  isActive ? "text-indigo-400 font-semibold" : "text-gray-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <div className="relative hidden group md:block">
            <button className="flex items-center gap-2 px-3 py-2 text-white transition bg-pink-300 rounded-lg hover:bg-indigo-800">
              <FaUser className="w-4 h-4" /> Account
            </button>
            <div className="absolute right-0 hidden w-40 py-2 mt-2 bg-[#0d0d3a] rounded-lg shadow-lg group-hover:block">
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-sm text-white hover:bg-indigo-800"
              >
                Profile
              </NavLink>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md md:hidden hover:bg-indigo-800"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="px-6 py-4 space-y-4 bg-[#0d0d3a] border-t border-gray-900 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-indigo-300"
            >
              {item.name}
            </NavLink>
          ))}
          <hr className="border-gray-900" />
          <NavLink
            to="/profile"
            className="block text-gray-200 hover:text-indigo-300"
          >
            Profile
          </NavLink>
        </div>
      )}
    </header>
  );
}
