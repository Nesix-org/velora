"use client";

import { useCart } from "@/app/cart/context";
import cartIcon from "@/public/assets/icons/cart.svg";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CartButton() {
  const { cart } = useCart();

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className={buttonVariants({
        variant: "outline",
        size: "icon",

        className: "rounded-full! relative",
      })}
      aria-label="cart"
    >
      <Image src={cartIcon} alt="cart" className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
