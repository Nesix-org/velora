import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCard from "../productCard";
import menClothe from "@/public/assets/menClothes/image 16.svg";
import menShoe1 from "@/public/assets/menFootwear/image 21.svg";
import menShoe2 from "@/public/assets/menFootwear/image 20.svg";

export default function FlashSaleSection() {
  const cards = [
    {
      image: menClothe,
      price: 210,
      name: "Men's Jacket",
      discount: "-30%",
      rating: 4.5,
      reviews: "(3212 reviews)",
    },
    {
      image: menShoe1,
      price: 210,
      name: "Men's Jacket",
      discount: "-30%",
      rating: 4.5,
      reviews: "(3212 reviews)",
    },
    {
      image: menShoe2,
      price: 210,
      name: "Men's Jacket",
      discount: "-30%",
      rating: 4.5,
      reviews: "(3212 reviews)",
    },
    {
      image: menClothe,
      price: 210,
      name: "Men's Jacket",
      discount: "-30%",
      rating: 4.5,
      reviews: "(3212 reviews)",
    },
    {
      image: menShoe2,
      price: 210,
      name: "Men's Jacket",
      discount: "-30%",
      rating: 4.5,
      reviews: "(3212 reviews)",
    },
  ];
  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Flash Sale
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Don&apos;t miss out on our limited-time flash sales with incredible
        discounts on selected products!
      </p>
      <div className="grid grid-cols-2 gap-5 md:hidden">
        {cards.map((card, index) => (
          <ProductCard
            key={index}
            image={card.image}
            price={card.price}
            productName={card.name}
            discount={card.discount}
            rating={card.rating}
            reviews={card.reviews}
          />
        ))}
      </div>
      <Carousel className="w-full max-w-md md:max-w-6xl hidden md:block">
        <div className="flex justify-end">
          <CarouselPrevious className="relative left-0 bg-white shadow z-10" />
          <CarouselNext className="relative right-0" />
        </div>
        <CarouselContent className=" md:flex gap-3">
          {cards.map((card, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
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
  );
}
