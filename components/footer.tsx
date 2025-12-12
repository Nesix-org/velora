import Link from "next/link";
import Image from "next/image";
import NewsLetterForm from "./homepage-components/newsletterform";



export default function Footer() {

  return (
    <footer className="w-full px-5 md:px-8 max-w-7xl mx-auto mt-12 dark:bg-gray-900">
      {/* Newsletter Section */}
      <div className="bg-bgLemon py-8 rounded-lg">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between md:gap-8 lg:gap-12">
            <h2 className="font-monts lg:ml-[-7.5rem] font-extrabold text-center text-xl uppercase leading-tight text-gray-900 md:text-left md:text-2xl lg:text-4xl">
              Stay up to date about
              <br />
              our latest offers
            </h2>
            <NewsLetterForm />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 py-8 md:px-8 lg:px-0">
        <div className="mx-auto max-w-7xl">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-14">
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center mx-auto w-[60%] md:text-left md:mx-0 md:w-full lg:ml-[-.1rem]">
              <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bgLemon md:h-16 md:w-16">
                  <Image
                    src="/icons/veloraLogo.png"
                    alt="Velora brand logo"
                    width={60}
                    height={60}
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
                  Velora.
                  <p className="font-normal text-[.4rem] md:text-sm lg:text-[.4rem]">
                    Think forward, Spend Smarter
                  </p>
                </span>
              </div>
              <p className="mb-6 text-[1.1rem] text-gray-600 leading-relaxed md:text-sm lg:w-[30ch]">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Link
                  href="#"
                  className="flex h-5 w-6 items-center justify-center transition-colors "
                  aria-label="Twitter"
                >
                  <Image
                    src="/icons/x.png"
                    alt="Twitter icon"
                    width={70}
                    height={50}
                  />
                </Link>
                <Link
                  href="#"
                  className="flex h-5 w-6 items-center justify-center rounded-full border border-gray-200 text-white transition-colors hover:bg-bgLemon "
                  aria-label="Facebook"
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="Facebook icon"
                    width={70}
                    height={50}
                  />
                </Link>
                <Link
                  href="#"
                  className="flex h-5 w-6 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-100"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/gram.png"
                    alt="Instagram icon"
                    width={70}
                    height={50}
                  />
                </Link>
                <Link
                  href="#"
                  className="flex h-5 w-6 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-100"
                  aria-label="GitHub"
                >
                  <Image
                    src="/icons/github.png"
                    alt="GitHub icon"
                    width={70}
                    height={50}
                  />
                </Link>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-6 mt-4 md:grid-cols-4">
                {/* Company Links */}
                <div className="lg:ml-12">
                  <Link href="/company">
                    <h3 className="mb-4 text-[1.2rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm hover:text-bgLemon transition-colors hover:text-[.95rem]">
                      Company
                    </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/company"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Help Links */}
                <div>
                  <Link href="/help">
                    <h3 className="mb-4 text-[1.2rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm hover:text-bgLemon transition-colors hover:text-[.95rem] ">
                      Help
                    </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/help"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Delivery Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* FAQ Links */}
                <div>
                  <Link href="/faq">
                    <h3 className="mb-4 text-[1.2rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm hover:text-bgLemon transition-colors hover:text-[.95rem]">
                      FAQ
                    </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Manage Deliveries
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Payments
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <Link href="/resources">
                    <h3 className="mb-4 text-[1.2rem] font-bold uppercase tracking-wider text-gray-900 md:text-sm hover:text-bgLemon transition-colors hover:text-[.95rem]">
                      Resources
                    </h3>
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/resources"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Free eBooks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        Development Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
                      >
                        How to - Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources"
                        className="text-[1rem] text-gray-600 md:text-sm hover:text-bgLemon transition-colors"
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
              <p className="text-sm text-bgGray hover:text-bgLemon transition-colors">
                Velora © 2000-{new Date().getFullYear()}, All Rights Reserved
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-10">
                  <Image
                    src="/icons/visa-pay.png"
                    alt="Visa card"
                    width={48}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
                <div className="w-14 h-10">
                  <Image
                    src="/icons/mcard.png"
                    alt="Mastercard"
                    width={48}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
                <div className="w-14 h-10">
                  <Image
                    src="/icons/apple-pay.png"
                    alt="Apple Pay"
                    width={48}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
                <div className="w-14 h-10">
                  <Image
                    src="/icons/paypal_.png"
                    alt="PayPal"
                    width={48}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
                <div className="w-14 h-10">
                  <Image
                    src="/icons/google-pay.png"
                    alt="Google Pay"
                    width={100}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
