"use client";

import Link from "next/link";

/* include search bar, wishlist icon and cart*/

export default function Navbar() {
  return (
    <nav className=" dark:bg-gray-800 w-full py-4 flex items-center justify-center gap-8">
      <div className="">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Velora
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/shop"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Shop
        </Link>
        <Link
          href="/blog"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Contact
        </Link>
      </div>
      {/* search bar, wishlist icon and cart, signup button */}
      <search className="ml-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </search>
      <div className="ml-4 flex items-center space-x-4">
        <Link
          href="/wishlist"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </Link>
        <Link
          href="/cart"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-13h2a2 2 0 012 2v1a2 2 0 01-2 2h-2m-6 0H5a2 2 0 01-2-2V6a2 2 0 012-2h2"
            />
          </svg>
        </Link>
      </div>
      <div>
        <Link
          href="/signup"
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
