"use client";

import { useCart } from "../../components/context/context";
import CartTable from "@/components/cartComponents/cartTable";
import CartMobileView from "@/components/cartComponents/cartMobileView";
import CartSummary from "@/components/cartComponents/cartSummary";
import EmptyCart from "@/components/cartComponents/emptyCart";
import { useState } from "react";

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleClearCart = () => {
    clearCart();
    setShowModal(false);
  };

  return (
    <section className="lg:max-w-7xl w-full px-10 flex flex-col my-10 mx-auto">
      <header>
        <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 md:text-2xl font-medium">
          My cart
        </h3>
      </header>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="w-full mt-5">
            <CartTable />
            <CartMobileView />
          </div>

          <CartSummary />

          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer mt-4 bg-gray-400 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Clear Cart?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to remove all items from your cart? This action cannot be undone.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
