"use client"
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const productRefs = useRef(new Array(products.length).fill(null)); // Create an array of refs

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
      productRefs.current = new Array(products.length).fill(null); // Update productRefs when products change
    }
  }, [products]);

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div
        className="relative w-screen h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${products[0]?.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Omega Shopping</h1>
          <p className="mt-4 text-lg md:text-2xl">Discover a World of Quality Products Just for You</p>
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <section className="py-16 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
            ref={productRefs.current[index]} // Assign ref to each product element
          >
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
            <p className="text-xl text-green-400 mt-2">{product.price}</p>
            {hoveredProductId === product.id && (
              <div className="tooltip-description absolute bottom-0 left-0 right-0 p-4 bg-black text-white rounded-b-lg">
                <p className="text-black font-semibold">{product.description}</p>
                <button className="mt-2 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}