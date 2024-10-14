// // src/app/login/page.tsx
// "use client";
// import { useState } from 'react';

// const Login = () => {
//   const [id, setId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (id === 'omega' && password === 'omega1234') {
//       alert('Login successful!');
//       // Redirect to admin page
//     } else {
//       alert('Invalid ID or Password!');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-grey-800 text-black">  {/* Removed theme references */}
//       <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl mb-4">Admin Login</h2>
//         <input
//           type="text"
//           placeholder="Admin ID"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//           className="w-full mb-4 p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-4 p-2 rounded"
//         />
//         <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;