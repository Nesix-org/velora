// Images & Icons
import Image, { StaticImageData } from "next/image";
import HeroBg from "@/public/assets/heroSection/heroImage.svg";
import { ArrowUpRight } from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import HomePageLabel from "./homepagelabel";

// Background Image
const imageUrl = "/assets/icons/bgImage.svg";

export default function HeroSection() {
  return (
    <main
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center",
      }}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div  className="w-full flex flex-col md:flex-row items-center justify-around min-h-screen px-4 md:px-7 lg:px-0">
        {/* Tagline & Shop Now Btn */}
        <div className="w-full max-w-sm md:max-w-xl flex flex-col items-center md:items-start gap-6 md:gap-20">
          <div className="space-y-3 md:space-y-5 text-center md:text-left ">
            <p className="inline-block bg-[#A1C249] rounded-full  py-0.5 px-4 md:px-7  font-medium text-primary text-xl ">
              Limited Offer  
            </p>
            <h2 className="text-3xl md:text-[50px] md:font-semibold">
              First Purchase Enjoy a Special Offer 
            </h2>
          </div>
          <div className="flex items-center space-x-4  bg-[#A1C249] rounded-full font-medium w-max py-2 px-1 md:px-2">
            <span className="pl-2 text-primary text-xl md:text-2xl">
              Shop Now
            </span>
            <Link href="/shop"
             className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "rounded-full!"
            })}
            aria-label="shop now"
            >
              <ArrowUpRight strokeWidth={3} />
            </Link>
          </div>
        </div>

     {/* Image */}
        <div className=" flex items-center justify-center md:justify-evenly relative">
          {/* Background Circle */}
          <div className="w-[320px] h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#A1C249]/20 rounded-full "></div>
         
          {/* Discount */}
          <div className="w-30 h-30 md:w-42 md:h-42 bg-[#A1C249] rounded-full p-2 absolute top-0 left-10">
            <div className="border border-dashed border-primary rounded-full w-full h-full flex items-center justify-center">
              <p className="text-primary font-semibold text-2xl md:text-4xl">
                50% <br />
                Sale
              </p>
            </div>
          </div>
        </div>
        <Image
            src={HeroBg}
            alt="hero" 
            className="w-[465px] md:w-[700px] lg:w-1/2  absolute bottom-27.5 md:left-[27%] lg:left-1/2 "
          />
      </div>
      {/* Infinite loop */}
      <div className="w-full h-[110px] bg-[#A1C249] flex items-center overflow-hidden mt-0">
       <HomePageLabel />
      </div>
    </main>
  );
}
