"use client";

import Head from "next/head";
import CustomerSupportCard from "@/components/homepage-components/customerService";
import Cartegories from "@/components/homepage-components/cartegories";
import MobileDesignSection from "@/components/homepage-components/mobileDesignSection";
import FlashSaleSection from "@/components/homepage-components/flashSale";
import Navbar from "@/components/navbar";
import NewArrival from "@/components/homepage-components/newArrival";

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
        <NewArrival />
        <MobileDesignSection />
      </div>
    </>
  );
}
