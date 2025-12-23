"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import starIcon from "@/public/assets/icons/ic_round-star.svg";
import { Trash2 } from "lucide-react";
import Link from "next/link";



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
        <Link href={`/wishlist/${1}`} className="flex">
            <div className="w-full lg:max-w-7xl h-[250px] lg:w-[245px] md:h-[370px]">
                <div className="relative group w-full h-[70%] bg-[#DBDBDB] rounded-3xl">
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

        </Link>
    );
}
