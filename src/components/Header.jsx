import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section: Logo + Search Input */}
        <div className="flex items-center space-x-4 w-full">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-900">
            <p>AdmiStay</p>
          </div>

          {/* Search Bar (Hidden on Small Screens) */}
          <div className="relative hidden md:flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search by City, University or Property"
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-4 pr-10 text-gray-700 focus:border-gray-400 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white">
              <i className="fa-solid fa-magnifying-glass text-sm"></i>
            </button>

          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Download App */}
          <button className="hidden lg:flex items-center space-x-1 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span className="text-sm">Download</span>
          </button>

          {/* Shortlist */}
          <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded">
            <i className="fa-regular fa-heart"></i>
            <span className="hidden lg:inline text-sm">Shortlist</span>
          </button>

          {/* Login Button */}
          <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-200 border px-4 py-2 rounded">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="text-sm">Login</span>
          </button>

          {/* Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center space-x-1 text-gray-700 hover:bg-gray-200 border px-4 py-2 rounded">
            <i className="fa-regular fa-circle-user"></i>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2 text-gray-700 hover:bg-gray-200 border px-4 py-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-regular fa-circle-user"></i>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-gray-100 p-4 rounded-md">
          <Link to="#" className="block text-gray-700">Quick Links</Link>
          <Link to="#" className="block text-gray-700">Help Center</Link>
          <Link to="#" className="block text-gray-700">How It Works</Link>
          <Link to="#" className="block text-gray-700 flex items-center space-x-2">
            <i className="fa-regular fa-heart"></i> <span>Shortlist</span>
          </Link>
          <Link to="#" className="block text-gray-700 flex items-center space-x-2">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Login</span>
          </Link>
        </div>
      )}
    </header>
  );
}
