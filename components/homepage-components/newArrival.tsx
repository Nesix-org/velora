import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "../productCard";
import { cards } from "@/constants/products";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewArrival() {
  const [api1, setApi1] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();

  const handlePrev = () => {
    api1?.scrollPrev();
    api2?.scrollPrev();
  };

  const handleNext = () => {
    api1?.scrollNext();
    api2?.scrollNext();
  };

  // Split cards into two rows
  const row1Cards = cards.slice(0, Math.ceil(cards.length / 2));
  const row2Cards = cards.slice(Math.ceil(cards.length / 2));

  return (
    <section>
      <header>
        <h3 className="border-l-25 border-[#A1C249] p-2 px-2 text-2xl mb-2 font-medium">
          This month
        </h3>
        <h2 className="text-5xl font-medium mb-2 text-gray-900 dark:text-gray-100">
          new Arrivals
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-5 md:hidden">
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
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* First Row Carousel */}
        <Carousel
          setApi={setApi1}
          className="w-full max-w-md md:max-w-6xl mb-4"
        >
          <CarouselContent className="md:flex gap-3">
            {row1Cards.map((card) => (
              <CarouselItem key={card.id} className="basis-1/2 md:basis-1/4">
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
        <Carousel setApi={setApi2} className="w-full max-w-md md:max-w-6xl">
          <CarouselContent className="md:flex gap-3">
            {row2Cards.map((card) => (
              <CarouselItem
                key={`row2-${card.id}`}
                className="basis-1/2 md:basis-1/4"
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
    </section>
  );
}
