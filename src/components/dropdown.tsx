"use client";
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <button
        onClick={toggleDropdown}
        className=" w-32  px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <li
            onClick={() => handleOptionClick('LLM')}
            className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
          >
            LLM
          </li>
          <li
            onClick={() => handleOptionClick('RAG')}
            className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
          >
            RAG
          </li>
          <li
            onClick={() => handleOptionClick('BOTH')}
            className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
          >
            BOTH
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
