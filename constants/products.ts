import { StaticImageData } from "next/image";
import menClothe from "@/public/assets/menClothes/image 16.svg";
import menShoe1 from "@/public/assets/menFootwear/image 21.svg";
import menShoe2 from "@/public/assets/menFootwear/image 20.svg";
import miniShoe from "@/public/assets/wishlistproduct/Frame 894.png";
import macroShoe from "@/public/assets/wishlistproduct/Frame 895@2x.png";

// Define the Product interface
export interface Product {
  id: number;
  image: string | StaticImageData;
  price: number;
  name: string;
  discount: string;
  rating: number;
  reviews: string;
  category: string;
}

export type WishlistProduct = {
  id: number;
  macroImage: string | StaticImageData;
  miniImage: string | StaticImageData;
  name: string;
  rating: number;
  review: number;
  price: number;
  description: string;
  store: string;
};

export const cards: Product[] = [
  {
    id: 1,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes", // Add this
  },
  {
    id: 2,
    image: menShoe1,
    price: 350.50,
    name: "Men's Shoes",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 3,
    image: menShoe2,
    price: 545.25,
    name: "Men casual shoe",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 4,
    image: menClothe,
    price: 225,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes", // Add this
  },
  {
    id: 5,
    image: menShoe2,
    price: 205,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 6,
    image: menClothe,
    price: 255.50,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes", // Add this
  },
  {
    id: 7,
    image: menShoe1,
    price: 260,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 8,
    image: menShoe2,
    price: 285,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 9,
    image: menClothe,
    price: 299.99,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes", // Add this
  },
  {
    id: 10,
    image: menShoe2,
    price: 300.05,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 11,
    image: menShoe2,
    price: 350.80,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 12,
    image: menClothe,
    price: 250.89,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes", // Add this
  },
  {
    id: 13,
    image: menShoe1,
    price: 200.45,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 14,
    image: menShoe2,
    price: 175.65,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
  {
    id: 15,
    image: menClothe,
    price: 215.75,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes", // Add this
  },
  {
    id: 16,
    image: menShoe2,
    price: 230.10,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear", // Add this
  },
];

type Category =
  | "men-footwear"
  | "men-clothes"
  | "women-clothes"
  | "women-footwear"
  | "scarf"
  | "necklace";

type ProductCategory = NonNullable<Category> | "uncategorized";

// Group products by category
export const productsByCategory = cards.reduce((acc, product) => {
  const category = (product.category ?? "uncategorized") as ProductCategory;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {} as Record<string, Product[]>);

export const wishlistProduct: WishlistProduct[] = [
  {
    id: 1,
    macroImage: macroShoe,
    miniImage: miniShoe,
    name: "Grey Casual Shoe",
    rating: 5,
    review: 150,
    price: 190,
    description:
      "Step into effortless style with these men’s casual slip-on shoes. Designed with a sleek grey fabric upper, cushioned insole, and sturdy white sole, they offer all-day comfort and a clean, modern look—perfect for everyday wear.",
    store: "Velora Store",
  },
];
