import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCard from "../productCard";
import { cards } from "@/constants/products";
import CountDownTimer from "../countDownTimer";

export default function FlashSaleSection() {
  const saleDate = new Date("2025-12-31T23:59:59");
  return (
    <section className="w-full lg:max-w-7xl">
      <section className="flex items-center gap-2">
        <div className="w-5 h-10 bg-bgLemon"></div>
        <h2 className="md:text-2xl font-medium"> Today&apos;s Deal </h2>
      </section>
      <section className="flex flex-col md:flex-row items-start gap-5  md:gap-10 lg:gap-15 mt-5">
        <h2 className="text-[18px] md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100">
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
      <Carousel className="translate-y-10 lg:translate-y-3 hidden md:block">
        <div className="flex justify-end">
          <CarouselPrevious className="relative left-0 bg-white shadow z-10" />
          <CarouselNext className="relative right-0" />
        </div>
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
