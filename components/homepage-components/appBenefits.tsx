import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

type AppBenefits = {
  logoUrl: string;
  title: string;
  description: string;
};
const appBenefits: AppBenefits[] = [
  {
    logoUrl: "/assets/appBenefits/icon-delivery.svg",
    title: "Free and Fast Delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    logoUrl: "/assets/appBenefits/Icon-Customer service.svg",
    title: "24/7 Customer Service",
    description: "Friendly 24/7 customer support",
  },
  {
    logoUrl: "/assets/appBenefits/Icon-secure.svg",
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
];

export default function AppBenefits() {
  return (
    <section className="max-w-7xl w-full md:px-0 flex flex-col gap-5 md:gap-20 md:flex-row justify-center items-center">
      {appBenefits.map((benefit) => (
        <article
          key={benefit.title}
          className="flex flex-col items-center justify-center p-4"
        >
          <Image
            src={benefit.logoUrl}
            alt={`${benefit.title} icon`}
            width={64}
            height={64}
            className="mb-4 p-1 bg-black rounded-full border-8 border-gray-300"
          />

        <header className={`${poppins.className} text-center`}>
          <h3 className="text-sm mb-1 font-semibold uppercase">
            {benefit.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 max-w-xs">
            {benefit.description}
          </p>
          </header>
        </article>
      ))}
    </section>
  );
}
