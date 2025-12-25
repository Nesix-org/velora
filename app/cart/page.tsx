"use client";

import { useCart } from "../cart/context";
import CartTable from "@/components/cartComponents/cartTable";
import CartMobileView from "@/components/cartComponents/cartMobileView";
import CartSummary from "@/components/cartComponents/cartSummary";
import EmptyCart from "@/components/cartComponents/emptyCart";

export default function CartPage() {
  const { cart, clearCart } = useCart();

  return (
    <section className="lg:max-w-7xl w-full px-10 flex flex-col mt-10 mx-auto">
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
            onClick={clearCart}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}
