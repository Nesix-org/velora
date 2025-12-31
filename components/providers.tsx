"use client";

import { CartProvider } from "@/components/context/context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
