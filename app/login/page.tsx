"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import CustomerSupportCard from "@/components/homepage-components/appBenefits";
import FlashSaleSection from "@/components/homepage-components/flashSale";
import Cartegories from "@/components/homepage-components/cartegories";
import MobileDesignSection from "@/components/homepage-components/mobileDesignSection";

export default function LoginPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
        <form className="mt-8">
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?
            <Link href="/signup" className="text-blue-600 hover:underline ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col min-h-screen mx-auto  gap-8 ">
        <Navbar />
        <CustomerSupportCard />
        <FlashSaleSection />
        <Cartegories />
        <MobileDesignSection />
      </div>
    </div>
  );
}
