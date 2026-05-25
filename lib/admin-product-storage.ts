import type { AdminProduct } from "@/lib/product-types";

export const ADMIN_PRODUCTS_STORAGE_KEY = "velora-admin-products";
export const ADMIN_PRODUCTS_UPDATED_EVENT = "velora-admin-products-updated";

export function loadAdminProducts(): AdminProduct[] {
  if (typeof window === "undefined") {
    return [];
  }

  const stored = window.localStorage.getItem(ADMIN_PRODUCTS_STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored) as AdminProduct[];
  } catch {
    return [];
  }
}

export function saveAdminProducts(products: AdminProduct[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    ADMIN_PRODUCTS_STORAGE_KEY,
    JSON.stringify(products),
  );
  window.dispatchEvent(new Event(ADMIN_PRODUCTS_UPDATED_EVENT));
}
