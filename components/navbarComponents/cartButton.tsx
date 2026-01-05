"use client";

import { useCart } from "@/context/CartContext";
import cartIcon from "@/public/assets/icons/cart.svg";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function CartButton() {
  const { cart } = useCart();
  const pathname = usePathname();
  const isActive = pathname === "/cart";

  // Calculate total items in cart
  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <Link
      href="/cart"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "icon",

          className: "rounded-full! relative",
        }),
        isActive && "bg-bgLemon border-bgLemon text-black"
      )}
      aria-label="cart"
    >
      <Image src={cartIcon} alt="cart" className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
