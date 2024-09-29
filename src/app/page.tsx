"use client"
import React, { useState } from 'react';
import Inputfield from './components/inputfield';
import Dropdown from './components/dropdown';

const Home = () => {
  const [messages, setMessages] = useState([]);  // Store all messages

  const handleSaveInput = (userMessage) => {
    // Add user message and Omega's response to the messages array
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: userMessage },
      { sender: 'omega', text: 'Omega: I received your message!' },  // Simple Omega response
    ]);
  };

  return (
    <div className="h-screen bg-indigo-950 p-6">
      <div className="flex justify-between p-3">
        <div className="bg-gray-800 rounded-full hover:bg-gray-600 text-white px-6 py-2 border border-gray-500 font-bold cursor-pointer transition duration-300 ease-in-out">
          Upload document
        </div>
        <div className=' text-4xl text-white font-bold'>Omega.ai</div>
        <div className="bg-gray-800 rounded-full hover:bg-gray-600 text-white px-6 py-2 border border-gray-500 font-bold cursor-pointer transition duration-300 ease-in-out">
          Signup
        </div>
      </div>

      <div className="flex justify-center items-center space-x-6 mt-10">
        <Dropdown />
        <Inputfield saveInput={handleSaveInput} />
      </div>

      {/* Chat display */}
      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="chat-container overflow-y-auto h-64 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
