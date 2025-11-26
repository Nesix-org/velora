import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 min-w-[550px] mt-12 dark:bg-gray-900">
      {/* Newsletter Section */}
      <div className="bg-bgLemon px-4 py-8 rounded-lg md:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <h2 className="text-center text-xl font-black uppercase leading-tight text-gray-900 md:text-left md:text-2xl lg:text-3xl">
              Stay up to date about
              <br />
              our latest offers
            </h2>
            <div className="flex w-full max-w-md flex-col gap-3 md:w-auto">
              <div className="relative">
                <Mail className="absolute left-28 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 md:left-4" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-full border-0 bg-white pl-12 pr-4 text-center text-gray-900 placeholder:text-gray-400 md:pl-12 md:text-left"
                />
              </div>
              <Button className="h-12 w-full rounded-full bg-white text-[#a4c05c] hover:bg-gray-100 hover:text-gray-900 md:w-auto px-6 font-semibold cursor-pointer">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 py-8 md:px-8 lg:px-0">
        <div className="mx-auto max-w-7xl">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center mx-auto w-[60%] md:text-left md:mx-0 md:w-full">
              <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                <div className="flex h-18 w-18 items-center justify-center rounded-md bg-bgLemon md:h-16 md:w-16 lg:h-14 lg:w-25">
                  <Image
                    src="/icons/veloraLogo.png"
                    alt=" brand logo"
                    width={60}
                    height={60}
                  />
                </div>
                <span className="text-5xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
                  Velora.
                  <p className="font-normal text-[.7rem] md:text-sm lg:text-[.4rem]">
                    Think forward, Spend Smarter
                  </p>
                </span>
              </div>
              <p className="mb-6 text-[1.5rem] text-gray-600 leading-relaxed md:text-sm">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Link
                  href="#"
                  className="flex h-10 w-10 lg:h-8 lg:w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-100"
                  aria-label="Twitter"
                >
                  <Image
                    src="/icons/x.png"
                    alt="Twitter icon"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 lg:h-8 lg:w-12 items-center justify-center rounded-full border border-gray-200 bg-black text-white transition-colors hover:bg-gray-800"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 lg:h-8 lg:w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-100"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/gram.png"
                    alt="Instagram icon"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 lg:h-8 lg:w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-100"
                  aria-label="GitHub"
                >
                  <Image
                    src="/icons/github.png"
                    alt="GitHub icon"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8 mt-4 md:grid-cols-4 lg:gap-12">
                {/* Company Links */}
                <div>
                  <Link href="/company">
                  <h3 className="mb-4 text-[1.4rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm">
                    Company
                  </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/company"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Help Links */}
                <div>
                  <Link href="/help">
                  <h3 className="mb-4 text-[1.4rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm">
                    Help
                  </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/help"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Delivery Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* FAQ Links */}
                <div>
                  <Link href="/faq">
                  <h3 className="mb-4 text-[1.4rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm">
                    FAQ
                  </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Manage Deliveries
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Payments
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="mb-4 text-[1.4rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm">
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="#"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Free eBooks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Development Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        How to - Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[1.2rem] text-gray-600 hover:text-gray-900 md:text-sm"
                      >
                        Youtube Playlist
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-600">
                Velora © 2000-2023, All Rights Reserved
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-12 rounded bg-white p-1 shadow-sm">
                  <svg viewBox="0 0 48 32" className="h-full w-full">
                    <rect width="48" height="32" fill="#00579F" rx="4" />
                    <path fill="#FAA61A" d="M18 8h12v16H18z" />
                    <circle cx="16" cy="16" r="8" fill="#EB001B" />
                    <circle cx="32" cy="16" r="8" fill="#F79E1B" />
                  </svg>
                </div>
                <div className="h-8 w-12 rounded bg-white p-1 shadow-sm">
                  <svg viewBox="0 0 48 32" className="h-full w-full">
                    <rect width="48" height="32" fill="#0E4C96" rx="4" />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      VISA
                    </text>
                  </svg>
                </div>
                <div className="h-8 w-12 rounded bg-white p-1 shadow-sm">
                  <svg viewBox="0 0 48 32" className="h-full w-full">
                    <rect width="48" height="32" fill="#0070BA" rx="4" />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                      fontWeight="bold"
                    >
                      PayPal
                    </text>
                  </svg>
                </div>
                <div className="h-8 w-12 rounded bg-white p-1 shadow-sm">
                  <svg viewBox="0 0 48 32" className="h-full w-full">
                    <rect width="48" height="32" fill="#000" rx="4" />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      Pay
                    </text>
                  </svg>
                </div>
                <div className="h-8 w-12 rounded bg-white p-1 shadow-sm">
                  <svg viewBox="0 0 48 32" className="h-full w-full">
                    <rect width="48" height="32" fill="#fff" rx="4" />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      G Pay
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
