'use client';

import { useState } from 'react';
import ProductCard from './productCard';
import { StaticImageData } from 'next/image';
import { cards as products } from '@/constants/products';

// Define the Product type to match the data structure(products.ts)
interface Product {
  id: number;
  image: string | StaticImageData;
  name: string;
  price: number;
  discount: string;
  rating: number;
  reviews: string;
}

function ViewAllProducts() {
  const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

  const handleViewAll = (): void => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Button at the top */}
        <div className="flex justify-center items-center mb-6">
          <button
            type="button"
            onClick={handleViewAll}
            className="bg-[#A1C249] hover:bg-[#8FAF3A] text-black font-semibold py-3 px-25 rounded-3xl transition duration-200 shadow-md hover:shadow-lg"
            aria-label="Toggle product visibility"
            title='Click to view all Products'
          >
            {showAllProducts ? 'Hide Products' : 'View All Products'}
          </button>
        </div>

        {/* Products grid */}
        {showAllProducts && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
              {products && products.length > 0 ? (
                products.map((product: Product) => (
                  <ProductCard
                    id={product.id}
                    key={product.id}
                    image={product.image}
                    productName={product.name} 
                    price={product.price}
                    discount={product.discount}
                    rating={product.rating}
                    reviews={product.reviews}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">No products available</p>
              )}
            </div>

            {/* Button at the bottom when products are shown */}
            <div className="flex justify-center items-center mt-6">
              <button
                type="button"
                onClick={handleViewAll}
                className="bg-[#A1C249] hover:bg-[#8FAF3A] text-black font-semibold py-3 px-8 rounded-3xl transition duration-200 shadow-md hover:shadow-lg"
                aria-label="Hide products"
              >
                Hide Products
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewAllProducts;