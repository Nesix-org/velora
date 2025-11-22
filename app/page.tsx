"use client";

import Head from "next/head";
import HomePage from "./home-page/page";

function DynamicHead() {
  return (
    <Head>
      <title>Velora Home Page</title>
      <meta name="description" content={`An e-commerce website`} />
    </Head>
  );
}

export default function HomePageLayout() {
  return (
    <>
      <DynamicHead />
      <div className="min-h-screen bg-bgWhite mx-auto font-sans dark:bg-black">
        <HomePage />
      </div>
    </>
  );
}
