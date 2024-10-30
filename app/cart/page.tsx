"use client"
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import Link from "next/link";

const Cart = () => {
  const [products, setProducts] = useState<any>([]);
  const [price, setPrice] = useState<any>(0)

  const fetchProducts = async () => {

    try {
      const session = await getSession()
      console.log(session);


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
      console.log("set price");

      setPrice(tempPrice)

    } catch (error) {

      console.log("error", error);


    }

  }

  useEffect(() => {
    console.log("useeffect call");
    console.log("function call");
    fetchProducts()
  }, []);

  const onClickRemoveHandler = async (id: number) => {
    const temp = products.filter((item: any) => item.id !== id ? item : false)
    console.log(temp);
    setProducts(temp)
    const session = await getSession()
    const res1 = await fetch(`/api/users?email=${session?.user?.email}`)
    const user = await res1.json()
    const response = await fetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: id,
        userId: user
      }),
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center mt-20">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

        {products?.map((item: any) => {
          return (
            <div key={item.id} className="flex flex-col md:flex-row md:justify-between items-center border-b pb-4 mb-4">
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain rounded"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500 hidden md:block">
                    {item.description.slice(0, 50)}...
                  </p>
                  <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                <button onClick={() => onClickRemoveHandler(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            </div>
          )
        })}

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
          <Link href={"/checkout"}><button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900 w-full md:w-auto">
            Checkout
          </button></Link>
          <div className="text-lg font-semibold text-center md:text-right w-full md:w-auto">
            <span>Total:</span> ${price?.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
