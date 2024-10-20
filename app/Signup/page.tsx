import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white px-4'>
      <div className='text-gray-900 text-4xl font-semibold mb-6'>Sign Up</div>
      <div className='mb-4 w-full max-w-sm'>
        <input 
          className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200' 
          type="text" 
          placeholder="Username" 
          aria-label="Username" // Added aria-label for accessibility
          required // Mark as required
        />
      </div>
      <div className='mb-4 w-full max-w-sm'>
        <input 
          className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200' 
          type="email" 
          placeholder="Email" 
          aria-label="Email address" // Added aria-label for accessibility
          required // Mark as required
        />
      </div>
      <div className='mb-4 w-full max-w-sm'>
        <input 
          className='flex-grow text-left p-4 border border-black rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-black transition-shadow duration-200' 
          type="password" 
          placeholder="Password" 
          aria-label="Password" // Added aria-label for accessibility
          required // Mark as required
        />
      </div><Link href={"/"}>
      <button className='bg-black text-white p-4 w-40 max-w-xs rounded-sm duration-300 hover:scale-105'>
        Sign Up
      </button></Link>
      <div className='mt-4'>
        <p className='text-gray-700'>
          Already have an account?{' '}
          <Link href="/login" className='text-blue-600 hover:underline'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
