"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const { cart, totalPrice } = useCart();
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement coupon validation logic
    console.log("Applying coupon:", couponCode);
    // For now, just show an alert
    alert(`Coupon "${couponCode}" feature coming soon!`);
  };

  const handleCheckout = () => {
    // TODO: Navigate to checkout page when implemented
    router.push("/checkout");
  };

  return (
    <section className="flex flex-col md:flex-row mt-4 gap-4 justify-between items-start">
      {/* Coupon Form */}
      <form
        onSubmit={handleCouponSubmit}
        className="flex flex-col md:flex-row gap-4 items-center w-full"
      >
        <label htmlFor="coupon" className="sr-only">
          Coupon code
        </label>
        <input
          id="coupon"
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Coupon code"
          className="border border-gray-900 rounded-md px-4 py-2 w-full md:w-64"
        />
        <button
          type="submit"
          className="bg-bgLemon text-black px-4 py-3 text-xs font-bold rounded-full cursor-pointer"
        >
          Apply Coupon
        </button>
      </form>

      {/* Cart Total */}
      <aside className="w-full md:w-96 border border-gray-900 rounded-md p-5">
        <h3 className="font-semibold mb-4">Cart Total</h3>

        <div className="divide-y divide-gray-300">
          <div className="flex justify-between py-3">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCheckout}
          className="block mx-auto mt-4 bg-bgLemon text-black px-6 py-3 text-xs font-bold rounded-full cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </aside>
    </section>
  );
}
