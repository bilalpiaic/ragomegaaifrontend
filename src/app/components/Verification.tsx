"use client"
import { useState } from 'react';

const VerificationModal = ({ onSuccess }) => {
  const [verificationId, setVerificationId] = useState('');
  const [verificationPassword, setVerificationPassword] = useState('');

  const handleVerify = () => {
    const adminId = process.env.NEXT_PUBLIC_ADMIN_ID;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (verificationId === adminId && verificationPassword === adminPassword) {
      onSuccess();
    } else {
      alert('Invalid credentials. Access denied.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input 
          type="text"
          placeholder="Admin ID"
          value={verificationId}
          onChange={(e) => setVerificationId(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-black mb-4"
        />
        <input 
          type="password"
          placeholder="Password"
          value={verificationPassword}
          onChange={(e) => setVerificationPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-black mb-4"
        />
        <button onClick={handleVerify} className="bg-green-500 px-4 py-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default VerificationModal;
