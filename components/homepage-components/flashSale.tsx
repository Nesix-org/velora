"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "../productCard";
import { cards } from "@/constants/products";
import { type CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CountDownTimer from "../countDownTimer";

export default function FlashSaleSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  // Update the environment variable for future flash sales to avoid showing expired/incorrect times.
  const saleDate = new Date(
    process.env.NEXT_PUBLIC_FLASH_SALE_DATE || "2025-12-31T23:59:59"
  );

  const handlePrev = () => {
    carouselApi?.scrollPrev();
  };
  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  return (
    <section className="w-full lg:max-w-7xl px-10">
      <header>
        <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
          Today&apos;s deal
        </h3>
      </header>
      <section className="flex flex-col md:flex-row items-start gap-5  md:gap-10 lg:gap-15 mt-5">
        <h2 className="text-2xl md:text-5xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100">
          Flash Sales
        </h2>
        <div className="md:translate-y-2">
          <CountDownTimer targetDate={saleDate} />
        </div>
      </section>
      <div className="grid grid-cols-2 gap-5 md:hidden translate-y-10">
        {cards.map((card) => (
          <ProductCard
            key={card.id}
            image={card.image}
            price={card.price}
            productName={card.name}
            discount={card.discount}
            rating={card.rating}
            reviews={card.reviews}
          />
        ))}
      </div>
      <div className="hidden md:block">
        {/* Navigation Buttons */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 z-10"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Carousel
        setApi={setCarouselApi}
        className="translate-y-10 lg:translate-y-3 hidden md:block"
      >
        <CarouselContent className=" md:flex gap-3">
          {cards.map((card) => (
            <CarouselItem
              key={card.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 sm:basis-1/3"
            >
              <ProductCard
                image={card.image}
                price={card.price}
                productName={card.name}
                discount={card.discount}
                rating={card.rating}
                reviews={card.reviews}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
