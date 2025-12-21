"use client";

import { useCart } from "@/app/cart/context";
import Image from "next/image";
import { X } from "lucide-react";

export default function CartMobileView() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <div className="md:hidden space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="bg-white shadow-sm rounded-lg p-4">
          {/* Product Info */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute -top-1 left-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Quantity:</span>
            <div className="flex items-center gap-2 bg-gray-300 py-2 px-2 rounded-sm">
              <button
                onClick={() => handleDecrement(item.id, item.quantity)}
                disabled={item.quantity === 1}
                className="px-3 py-1 bg-white rounded-sm hover:bg-gray-100 disabled:opacity-50"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="w-12 text-center py-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value);
                  if (newQuantity > 0 && !isNaN(newQuantity)) {
                    updateQuantity(item.id, newQuantity);
                  }
                }}
              />
              <button
                onClick={() => handleIncrement(item.id, item.quantity)}
                className="px-3 py-1 bg-white rounded-sm hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="font-semibold">Subtotal:</span>
            <span className="font-bold text-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
