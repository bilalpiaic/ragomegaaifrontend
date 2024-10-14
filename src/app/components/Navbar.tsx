"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-green-400 transition-colors duration-300">
            OME<span className="text-green-400">GA</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link href="/" className="hover:text-green-400 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:text-green-400 transition-colors duration-300">
              Admin
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-400 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
          </li>
          <li>
            <Link href="/login" className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600 transition-colors duration-300">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-white py-4 px-4 border-t border-gray-700">
          <li className="py-2">
            <Link href="/" className="block text-xl hover:text-green-400 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link href="/admin" className="block text-xl hover:text-green-400 transition-colors duration-300">
              Admin
            </Link>
          </li>
          <li className="py-2">
            <Link href="/about" className="block text-xl hover:text-green-400 transition-colors duration-300">
              About
            </Link>
          </li>
          <li className="py-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
          </li>
          <li className="py-2">
            <Link href="/login" className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600 transition-colors duration-300">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;