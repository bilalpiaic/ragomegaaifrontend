import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white px-4'>
      <div className='text-gray-900 text-4xl font-semibold mb-6'>Login</div>
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
        Submit
      </button></Link>
      <div className='mt-4'>
        <p className='text-gray-700'>
          Don’t have an account?{' '}
          <Link href="/signup" className='text-blue-600 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
      <div className='mt-6 flex items-center justify-center'>
        
          Login with         <Link href="https://github.com/login" target="_blank" rel="noopener noreferrer" className='flex items-center'>
          <span className='text-blue-600'> GitHub</span>
     
        </Link>
      </div>
    </div>
  );
}

export default Login;
