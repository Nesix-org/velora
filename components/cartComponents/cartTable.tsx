"use client";

import { useCart } from "@/components/context/context";
import Image from "next/image";
import { X } from "lucide-react";

export default function CartTable() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrement = (id: number, currentQuantity: number) => {
    if (currentQuantity < 99) {
      updateQuantity(id, currentQuantity + 1);
    }
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <table
      className="hidden md:table w-full table-fixed"
      style={{ borderSpacing: "0 16px", borderCollapse: "separate" }}
    >
      <thead>
        <tr className="bg-white shadow-sm rounded-lg">
          <th className="text-left px-6 py-6 rounded-l-lg">Product</th>
          <th className="text-center px-6 py-6">Price</th>
          <th className="text-center px-6 py-6">Quantity</th>
          <th className="text-right px-6 py-6 rounded-r-lg">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id} className="bg-white shadow-sm rounded-lg">
            <td className="text-left px-6 py-4 rounded-l-lg">
              <div className="flex flex-row items-center gap-4">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="absolute -top-1 left-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                {item.name}
              </div>
            </td>
            <td className="text-center px-6 py-6">${item.price}</td>
            <td className="text-center px-6 py-6">
              <div className="flex flex-row items-center justify-center gap-2 bg-gray-300 w-fit mx-auto py-2 px-2 rounded-sm">
                <button
                  onClick={() => handleDecrement(item.id, item.quantity)}
                  disabled={item.quantity === 1}
                  aria-label="Decrease quantity"
                  className="px-2 py-1 bg-white rounded-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  max="99"
                  aria-label="Quantity"
                  className="w-12 text-center py-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (newQuantity > 0 && newQuantity <= 99 && !isNaN(newQuantity)) {
                      updateQuantity(item.id, newQuantity);
                    }
                  }}
                />
                <button
                  onClick={() => handleIncrement(item.id, item.quantity)}
                  disabled={item.quantity >= 99}
                  aria-label="Increase quantity"
                  className="px-2 py-1 bg-white rounded-sm hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  +
                </button>
              </div>
            </td>
            <td className="text-right px-6 py-6 rounded-r-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
