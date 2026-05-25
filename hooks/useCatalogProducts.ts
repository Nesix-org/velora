"use client";

import { useEffect, useState } from "react";

import {
  ADMIN_PRODUCTS_UPDATED_EVENT,
  loadAdminProducts,
} from "@/lib/admin-product-storage";
import { getProductImageUrl } from "@/lib/cloudinary-url";
import type { AdminProduct } from "@/lib/product-types";
import { cards, type Product } from "@/constants/products";

function mapAdminProductToCatalogProduct(product: AdminProduct): Product {
  return {
    id: product.id,
    image: getProductImageUrl(product.image, {
      width: 640,
      height: 640,
    }),
    price: product.price,
    name: product.name,
    discount: product.discount,
    rating: product.rating,
    reviews: product.reviews,
    category: product.category,
  };
}

function groupProductsByCategory(products: Product[]) {
  return products.reduce(
    (acc, product) => {
      const category = product.category ?? "uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    },
    {} as Record<string, Product[]>,
  );
}

export function useCatalogProducts() {
  const [products, setProducts] = useState<Product[]>(cards);

  useEffect(() => {
    const updateProducts = () => {
      const adminProducts = loadAdminProducts().map(mapAdminProductToCatalogProduct);
      setProducts([...adminProducts, ...cards]);
    };

    updateProducts();
    window.addEventListener("storage", updateProducts);
    window.addEventListener(ADMIN_PRODUCTS_UPDATED_EVENT, updateProducts);

    return () => {
      window.removeEventListener("storage", updateProducts);
      window.removeEventListener(ADMIN_PRODUCTS_UPDATED_EVENT, updateProducts);
    };
  }, []);

  return {
    products,
    productsByCategory: groupProductsByCategory(products),
  };
}
