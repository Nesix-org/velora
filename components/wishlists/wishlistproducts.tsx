"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import starIcon from "@/public/assets/icons/ic_round-star.svg";
import { Trash2 } from "lucide-react";



type WishlistProductsProps = {
  image: string | StaticImageData;
  productName: string;
  price: number;
  discount: string;
  rating: number;
  reviews: string;
};

export default function WishlistProducts({
  image,
  productName,
  price,
  discount,
  rating,
  reviews,
}: WishlistProductsProps) {
 
  return (
    <article className="flex">
        <div className="w-full lg:max-w-7xl h-[250px] lg:w-[245px] md:h-[370px]">
        <div className="relative group w-full h-[70%] bg-[#DBDBDB] rounded-3xl">
        <button
          type="button"
          aria-label="Add product to cart"
          className="absolute bottom-0 w-full py-2 md:py-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 opacity-0 transition-all duration-300 ease-out md:text-xl font-medium rounded-b-3xl bg-[#A1C249] z-10 cursor-pointer"
        >
          Add to cart
        </button>
        <span className="absolute hidden md:block top-5 px-3 py-2 bg-[#A1C249] font-medium text-xl ">
          {discount}
        </span>
        <button
          type="button"
          className="absolute top-1.5 right-1.5 w-7 h-7 md:w-11 md:h-11 z-50 cursor-pointer"
        >
          <Trash2 />
        </button>

        <Image
          className="object-contain"
          src={image}
          fill
          alt="product image"
          loading="eager"
        />
      </div>
      <span className="md:text-xl font-medium"> {productName} </span>
      <div className="flex items-center gap-1">
        <Image src={starIcon} alt="star icon" />
        <span className="text-[11px]"> {rating} </span>
        <span className="text-[11px] text-[#A1A1A1]"> {reviews} </span>
      </div>
      <p className="md:text-xl font-medium"> ${price} </p>
        </div>

    </article>
  );
}
