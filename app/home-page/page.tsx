"use client";

import Head from "next/head";
import CustomerSupportCard from "@/components/homepage-components/customerService";
import Cartegories from "@/components/homepage-components/cartegories";
import FlashSaleSection from "@/components/homepage-components/flashSale";
import AppStoreExperience from "@/components/homepage-components/appStoreExperience";

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
        <CustomerSupportCard />
        <FlashSaleSection />
        <Cartegories />
        <AppStoreExperience />
      </div>
    </>
  );
}
