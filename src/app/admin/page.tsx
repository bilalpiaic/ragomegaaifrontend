// Admin.tsx
"use client";
import { useState, useEffect } from 'react';
import VerificationModal from '../components/Verification';

const Admin = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(true); // Show the modal every time by default
  const [isAdmin, setIsAdmin] = useState(false);
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // On load, check if products exist in localStorage and fetch them
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }

    // Ensure adminCredentials are available in localStorage
    const storedCredentials = localStorage.getItem('adminCredentials');
    if (!storedCredentials || !Array.isArray(JSON.parse(storedCredentials))) {
      localStorage.setItem('adminCredentials', JSON.stringify([
        { id: 'omega', password: 'omega1234' } // Default credentials
      ]));
    }
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: productName,
      image: productImage,
      description: productDescription,
      price: productPrice,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    resetForm();
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const resetForm = () => {
    setProductName('');
    setProductImage('');
    setProductDescription('');
    setProductPrice('');
  };

  const handleSetCredentials = () => {
    // Save new credentials to localStorage
    const storedCredentials = JSON.parse(localStorage.getItem('adminCredentials') || '[]');
    storedCredentials.push({ id: newId, password: newPassword });
    localStorage.setItem('adminCredentials', JSON.stringify(storedCredentials));
    setNewId('');
    setNewPassword('');
  };

  // After successful login, set isAdmin to true
  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {showModal && (
        <VerificationModal 
          onClose={() => setShowModal(false)} 
          onSuccess={handleAdminLogin} 
        />
      )}

      {isAdmin ? (
        <>
          <h1 className="text-4xl font-bold mb-6 text-center">Admin Panel</h1>

          {/* Product Adding Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Image URL"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                rows={3}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <button 
              onClick={handleAddProduct} 
              className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600 transition-colors duration-300">
              Add Product
            </button>
          </div>

          {/* Product List */}
          <h2 className="text-2xl font-semibold mb-4">Product List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 p-6 rounded-lg shadow-md relative">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                <p className="text-gray-400">{product.description}</p>
                <p className="text-green-400 font-bold">{product.price}</p>
                <button 
                  onClick={() => handleDeleteProduct(product.id)} 
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition duration-200">
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Change Admin Credentials */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Change Admin Credentials</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="New Admin ID"
                value={newId}
                onChange={(e) => setNewId(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
              />
            </div>
            <button 
              onClick={handleSetCredentials} 
              className="bg-blue-500 px-6 py-2 rounded text-white font-semibold hover:bg-blue-600 transition-colors duration-300">
              Change Credentials
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-4xl font-bold mb-6 text-center">Unauthorized Access</h1>
      )}
    </div>
  );
};

export default Admin;
