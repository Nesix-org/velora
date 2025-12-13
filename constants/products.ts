import menClothe from "@/public/assets/menClothes/image 16.svg";
import menShoe1 from "@/public/assets/menFootwear/image 21.svg";
import menShoe2 from "@/public/assets/menFootwear/image 20.svg";

// Define the Product interface
export interface Product {
  id: number;
  image: string;
  price: number;
  name: string;
  discount: string;
  rating: number;
  reviews: string;
  category: string;
}

export const cards: Product[] = [
  {
    id: 1,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes" // Add this
  },
  {
    id: 2,
    image: menShoe1,
    price: 210,
    name: "Men's Shoes",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 3,
    image: menShoe2,
    price: 210,
    name: "Men casual shoe",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 4,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes" // Add this
  },
  {
    id: 5,
    image: menShoe2,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 6,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes" // Add this
  },
  {
    id: 7,
    image: menShoe1,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 8,
    image: menShoe2,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 9,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes" // Add this
  },
  {
    id: 10,
    image: menShoe2,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 11,
    image: menShoe2,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 12,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes" // Add this
  },
  {
    id: 13,
    image: menShoe1,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 14,
    image: menShoe2,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
  {
    id: 15,
    image: menClothe,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-clothes" // Add this
  },
  {
    id: 16,
    image: menShoe2,
    price: 210,
    name: "Men's Jacket",
    discount: "-30%",
    rating: 4.5,
    reviews: "(3212 reviews)",
    category: "men-footwear" // Add this
  },
];

type Category = 'men-footwear' | 'men-clothes' | "women-clothes" | 'women-footwear' | 'scarf' | 'necklace';

type ProductCategory = NonNullable<Category> | 'uncategorized';

// Group products by category
export const productsByCategory = cards.reduce((acc, product) => {
  const category = (product.category ?? 'uncategorized') as ProductCategory;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {} as Record<string, Product[]>);