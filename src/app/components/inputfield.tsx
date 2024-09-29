"use client"
import React, { useState } from 'react';

const Inputfield = ({ saveInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      saveInput(inputValue);  // Pass input value to parent component
      setInputValue('');      // Clear input after submission
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-96 mr-28">
        <input
          className="w-full border-2 border-gray-300 focus:border-blue-500 rounded-full py-3 px-5 bg-gray-100 text-gray-700 focus:outline-none font-semibold placeholder-gray-500 transition duration-300 ease-in-out"
          type="text"
          placeholder="Message Omega"
          name="input"
          id="input"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r  from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Inputfield;
