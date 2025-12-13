"use client";

import { useCart } from "../cart/context";
import Image from "next/image";
import Link from "next/link";
import JustForYou from "@/components/cartComponents/justForYou";
import { X } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <section className="lg:max-w-7xl w-full px-10 flex flex-col mt-10 mx-auto  ">
      <header>
        <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 md:text-2xl font-medium">
          My cart
        </h3>
      </header>

      {cart.length === 0 ? (
        <section>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={"/emptyCart.svg"}
              alt={"empty Cart"}
              width={400}
              height={80}
            />
            <p className="text-gray-500 font-semibold text-3xl">
              No items here
            </p>
            <Link href={"/"} className="mt-2 text-2xl text-bgLemon px-4">
              Continue Shopping
            </Link>
          </div>
          <JustForYou />
        </section>
      ) : (
        <>
          <div className="w-full mt-5">
            {/* Desktop Table - hidden on mobile/tablet */}
            <table
              className="hidden md:table w-full table-fixed"
              style={{ borderSpacing: "0 16px", borderCollapse: "separate" }}
            >
              <thead>
                <tr className="bg-white shadow-sm rounded-lg">
                  <th className="text-left px-6 py-6 rounded-l-lg">Product</th>
                  <th className="text-center px-6 py-6">Price</th>
                  <th className="text-center px-6 py-6">Quantity</th>
                  <th className="text-right px-6 py-6 rounded-r-lg">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <>
                    <tr
                      key={`item-${item.id}`}
                      className="bg-white shadow-sm rounded-lg"
                    >
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
                              className="absolute -top-1 left-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center"
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
                            onClick={() =>
                              handleDecrement(item.id, item.quantity)
                            }
                            disabled={item.quantity === 1}
                            className="px-2 py-1 bg-white rounded-sm hover:bg-gray-100 disabled:opacity-50"
                          >
                            -
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleIncrement(item.id, item.quantity)
                            }
                            className="px-2 py-1 bg-white rounded-sm hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-right px-6 py-6 rounded-r-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                    <tr key={`spacer-${item.id}`} className="h-4"></tr>
                  </>
                ))}
              </tbody>
            </table>

            {/* Mobile/Tablet Card View - hidden on desktop */}
            <div className="md:hidden space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-sm rounded-lg p-4"
                >
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
                      <h3 className="font-semibold text-lg mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      Quantity:
                    </span>
                    <div className="flex items-center gap-2 bg-gray-300 py-2 px-2 rounded-sm">
                      <button
                        onClick={() => handleDecrement(item.id, item.quantity)}
                        disabled={item.quantity === 1}
                        className="px-3 py-1 bg-white rounded-sm hover:bg-gray-100 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="px-3 font-medium">{item.quantity}</span>
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
          </div>

          <section className="flex flex-col md:flex-row mt-4 gap-4 justify-between items-start">
            {/* Coupon Form */}
            <form className="flex flex-col md:flex-row gap-4 items-center w-full">
              <label htmlFor="coupon" className="sr-only">
                Coupon code
              </label>
              <input
                id="coupon"
                type="text"
                placeholder="Coupon code"
                className="border border-gray-900 rounded-md px-4 py-2 w-full md:w-64"
              />
              <button
                type="submit"
                className="bg-bgLemon text-black px-4 py-3 text-xs font-bold rounded-full"
              >
                Apply Coupon
              </button>
            </form>

            {/* Cart Summary */}
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

                <div className="flex justify-between py-3 font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="block mx-auto mt-4 bg-bgLemon text-black px-6 py-3 text-xs font-bold rounded-full">
                Proceed to Checkout
              </button>
            </aside>
          </section>

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
