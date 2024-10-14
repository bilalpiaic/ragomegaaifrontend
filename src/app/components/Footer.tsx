import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Omega</h2>
            <p className="text-gray-400 text-sm">Your tagline or slogan here</p>
          </div>
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li>
              <a href="/" className="hover:text-green-500 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-500 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-500 transition-colors duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-green-500 transition-colors duration-300">
                Products
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Omega. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;