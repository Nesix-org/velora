"use client";

import React, { useState } from "react";
import { ChevronRight, Star } from "lucide-react";
import { productsByCategory } from "../../constants/products"; // Adjust path as needed
import Image from "next/image";
import ViewAllProducts from "../ViewAllProducts";

interface Category {
  id: string;
  name: string;
}

const ShopCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("men-clothes");

  const categories: Category[] = [
    { id: "women-footwear", name: "Women Footwear" },
    { id: "men-clothes", name: `Men's Clothes` },
    { id: "men-footwear", name: "Men Footwear" },
    { id: "women-clothes", name: `Women's Clothes` },
    { id: "scarf", name: "Scarfs" },
    { id: "necklace", name: "Necklace" },
  ];

  return (
    <section className="w-full lg:max-w-7xl px-10">
      <header>
        <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
          Category
        </h3>
      </header>
      <section className="flex flex-col md:flex-row items-start gap-5  md:gap-10 lg:gap-15 mt-5">
        <h2 className="text-2xl md:text-5xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100 p-4">
          Shop by Category
        </h2>
      </section>
      <div className="flex gap-6">
        {/* Left Sidebar - Categories */}
        <div className="w-80 bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? "text-bgLemon"
                    : "text-grey"
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm ${
                      selectedCategory === category.id
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  ></span>
                  <ChevronRight size={18} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Products */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {productsByCategory[selectedCategory] &&
            productsByCategory[selectedCategory].length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsByCategory[selectedCategory].map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-200 hover:border-bgLemon"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.discount && (
                        <div className="absolute top-3 left-3 bg-bgLemon text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {product.discount}
                        </div>
                      )}
                      <Image
                        className="absolute top-3 right-3 cursor-pointer border border-white rounded-full bg-white w-7 h-7 p-1"
                        src="/assets/icons/heart.svg"
                        alt="heart"
                        width={24}
                        height={24}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                          <span className="text-sm font-medium text-slate-700">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {product.reviews}
                        </span>
                      </div>

                      {/* Price and Cart */}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-black">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                <p className="text-lg">
                  No products available in this category yet
                </p>
                <p className="text-sm mt-2">Check back soon for new items!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <ViewAllProducts/>
      </div>
    </section>
  );
};

export default ShopCategory;
