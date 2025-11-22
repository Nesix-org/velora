"use client";

import Head from "next/head";
import CustomerSupportCard from "@/components/homepage-components/customerService";
import Cartegories from "@/components/homepage-components/cartegories";
import MobileDesignSection from "@/components/homepage-components/mobileDesignSection";
import FlashSaleSection from "@/components/homepage-components/flashSale";
import Navbar from "@/components/navbar";

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
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto items-center justify-center bg-bgWhite px-8 gap-8 font-sans dark:bg-black">
        <Navbar />
        <CustomerSupportCard />
        <FlashSaleSection />
        <Cartegories />
        <MobileDesignSection />
      </div>
    </>
  );
}
