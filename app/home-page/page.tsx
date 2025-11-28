"use client";

import Head from "next/head";
import Cartegories from "@/components/homepage-components/cartegories";
import FlashSaleSection from "@/components/homepage-components/flashSale";
import AppStoreExperience from "@/components/homepage-components/appStoreExperience";
import AppBenefits from "@/components/homepage-components/appBenefits";

function DynamicHead() {
  return (
    <Head>
      <title>Velora Home Page</title>
      <meta
        name="description"
        content={`home page of Velora e-commerce website`}
      />
    </Head>
  );
}

export default function HomePage() {
  return (
    <>
      <DynamicHead />
      <div className="flex flex-col  items-center  gap-8 ">
        <FlashSaleSection />
        <Cartegories />
        <AppStoreExperience />
        <AppBenefits />
      </div>
    </>
  );
}
