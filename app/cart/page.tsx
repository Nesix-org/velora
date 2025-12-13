"use client";
import { useCart } from  "../cart/context";
import Image from "next/image";
import Link from "next/link";
import JustForYou from "@/components/cartComponents/justForYou";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b py-4"
            >
              <Image src={item.image} alt={item.name} width={80} height={80} />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>

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
