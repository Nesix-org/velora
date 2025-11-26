import Image from "next/image";
import { StaticImageData } from "next/image";
import HeartIcon from "@/public/assets/icons/Frame 2147225110.svg";
import starIcon from "@/public/assets/icons/ic_round-star.svg";

type cardProps = {
  image: string | StaticImageData;
  productName: string;
  price: number;
  discount: string;
  rating: number;
  reviews: string;
};

export default function ProductCard({
  image,
  productName,
  price,
  discount,
  rating,
  reviews,
}: cardProps) {
  return (
    <>
      <section className="w-full h-[250px] md:w-[245px] md:h-[370px]">
        <div className="relative group w-full h-[70%] bg-[#DBDBDB] rounded-3xl">
          <button className="absolute bottom-0 w-full py-2 md:py-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 opacity-0 transition-all duration-200 ease-out md:text-xl font-medium rounded-b-3xl bg-[#A1C249] z-10 cursor-pointer ">
            Add to cart
          </button>
          <span className="absolute hidden md:block top-5 px-3 py-2 bg-[#A1C249] font-medium text-xl ">
            {discount}
          </span>
          <button className="absolute top-1.5 right-1.5 w-[29px] h-[29px] md:w-11 md:h-11">
            <Image src={HeartIcon} alt="heart icon" className="w-full h-full" />
          </button>
          <Image
            className="object-contain"
            src={image}
            fill
            alt="product image"
          />
        </div>
        <span className="md:text-xl font-medium"> {productName} </span>
        <div className="flex items-center gap-1">
          <Image src={starIcon} alt="star icon" />
          <span className="text-[11px]"> {rating} </span>
          <span className="text-[11px] text-[#A1A1A1]"> {reviews} </span>
        </div>
        <p className="md:text-xl font-medium"> ${price} </p>
      </section>
    </>
  );
}
