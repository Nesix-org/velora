"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "../productCard";
import { cards } from "@/constants/products";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ViewAllProducts from "@/components/ViewAllProducts";

export default function NewArrival() {
  const [firstRowApi, setFirstRowApi] = useState<CarouselApi>();
  const [secondRowApi, setSecondRowApi] = useState<CarouselApi>();

  const handlePrev = () => {
    firstRowApi?.scrollPrev();
    secondRowApi?.scrollPrev();
  };

  const handleNext = () => {
    firstRowApi?.scrollNext();
    secondRowApi?.scrollNext();
  };

  // Split cards into two rows
  const row1Cards = cards.slice(0, Math.ceil(cards.length / 2));
  const row2Cards = cards.slice(Math.ceil(cards.length / 2));

  return (
    <section className="lg:max-w-7xl w-full px-10 ">
      <header>
        <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
          This month
        </h3>
        <h2 className="text-2xl md:text-5xl font-medium mt-5 mb-2 text-gray-900 dark:text-gray-100">
          New Arrivals
        </h2>
      </header>

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

        {/* First Row Carousel */}
        <Carousel setApi={setFirstRowApi} className="w-full mb-4">
          <CarouselContent className="md:flex gap-3">
            {row1Cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-1/2 md:basis-1/3 lg:1/4 sm:1/3"
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

        {/* Second Row Carousel */}
        <Carousel setApi={setSecondRowApi} className="w-full">
          <CarouselContent className="md:flex gap-3">
            {row2Cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-1/2 md:basis-1/3 lg:1/4 sm:1/3"
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
      </div>
      <div className="flex justify-center mt-6">
        <ViewAllProducts products={cards} />
      </div>
    </section>
  );
}
