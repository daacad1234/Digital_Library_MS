import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/books", label: "Books" },
    { to: "/borrow", label: "Borrow" },
    { to: "/members", label: "Members" },
    { to: "/report", label: "Report" },
  ];

  return (
    <nav className="bg-slate-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-white text-xl font-bold tracking-tight"
        >
          📚 Digital Library
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                location.pathname === link.to
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/login"
            className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 border-b border-slate-700 ${
                location.pathname === link.to
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="p-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;