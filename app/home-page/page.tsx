import FlashSaleSection from "@/components/homepage-components/flashSale";

import AppStoreExperience from "@/components/homepage-components/appStoreExperience";
import ViewAllProducts from "@/components/ViewAllProducts";
import NewArrival from "@/components/homepage-components/newArrival";
import HeroSection from "@/components/homepage-components/heroSection";
import AppBenefits from "@/components/homepage-components/appBenefits";
import ShopCategory from "@/components/homepage-components/shopCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Velora Home Page',
    description: 'Home Page of Velora E-Commerce Website',
}


export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center  gap-4 md:gap-8 ">
        <HeroSection />
        <FlashSaleSection />
        <ViewAllProducts />
        <ShopCategory />
        <NewArrival />
        <AppStoreExperience />
        <AppBenefits />
      </div>
    </>
  );
}
