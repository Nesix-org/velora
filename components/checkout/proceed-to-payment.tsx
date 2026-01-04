"use client";

import Image from "next/image";
import { useCart } from "../../context/CartContext";
import BankDetails from "./bank-details";

function ProceedToPayment() {
  const { cart: carts, totalPrice } = useCart();
  const shipping = 0;

  return (
    <section className="w-full p-2">
      <div className="w-full flex flex-col gap-3">
        {carts?.map((cart) => (
          <div key={cart.id} className="flex gap-8 items-center w-full">
            <Image src={cart.image} alt={cart.name} width={40} height={40} />
            <div className="flex justify-between items-center flex-1">
              <h3>{cart.name}</h3>
              <p>${cart.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center border-b py-4">
          <h2>Subtotal: </h2>
          <p className="font-semibold ">${totalPrice}</p>
        </div>
        <div className="flex justify-between items-center border-b py-4">
          <h2>Shipping: </h2>
          <p className="font-semibold ">Free</p>
        </div>
        <div className="flex justify-between items-center py-4">
          <h2>Total: </h2>
          <p className="font-semibold ">${totalPrice + shipping}</p>
        </div>
      </div>
      <div>
        <BankDetails />
      </div>
    </section>
  );
}

export default ProceedToPayment;
