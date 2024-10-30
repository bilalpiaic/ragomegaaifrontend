"use client"
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0)
  const [form, setForm] = useState({ name: "", address: "", contact: "" });

  useEffect(() => {
    const fetchProducts = async () => {
      const session = await getSession()

      const res1 = await fetch(`/api/users?email=${session?.user?.email}`)
      const user = await res1.json()

      const res2 = await fetch('https://fakestoreapi.com/products')
      let tempProducts = await res2.json()

      const res3 = await fetch(`/api/cart?userId=${user}`)
      const cart = await res3.json()

      let cartProducts = []
      for (let i = 0; i < cart.cart.length; i++) {
        cartProducts.push(tempProducts[Number(cart.cart[i]) - 1])
      }
      setProducts(cartProducts)
      tempProducts = cartProducts

      let tempPrice = 0
      for (let i = 0; i < tempProducts.length; i++) {
        tempPrice += tempProducts[i]?.price
      }
      setPrice(tempPrice)
    }
    fetchProducts()
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onClickHandler = async () => {
    const session = await getSession()
    const res1 = await fetch(`/api/users?email=${session?.user?.email}`)
    const user = await res1.json()

    const res3 = await fetch(`/api/cart?userId=${user}`)
    const cart = await res3.json()

    for (let i = 0; i < cart.cart.length; i++) {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user,
          productId: cart.cart[i],
          ...form
        }),
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      {/* User Information Form */}
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Your Information</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleInputChange}
            placeholder="Contact"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </form>
      </div>

      {/* Product Listing */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-md w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Your Products</h2>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover mr-0 sm:mr-4 mb-4 sm:mb-0"
              />
              <div className="text-center sm:text-left">
                <p className="font-semibold">{product.title}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Button */}
      <div className="text-lg font-semibold text-center md:text-right w-full md:w-auto">
        <span>Total:</span> ${price?.toFixed(2)}
        <button onClick={onClickHandler} className="ml-5 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full sm:w-auto">
          Place order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
