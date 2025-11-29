"use client";
// Next Link & path
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// Images & Icon
import logo from "../public/assets/icons/mobile-logo.svg";
import Icon from "../public/assets/icons/Logo.svg";
import cartIcon from "../public/assets/icons/cart.svg";
import heartIcon from "../public/assets/icons/heart.svg";
import Search from "../public/assets/icons/search.svg";
import { buttonVariants, Button } from "@/components/ui/button";
import { X, Menu, ChevronDown, ChevronUp, User } from "lucide-react";
// States
import { useState } from "react";
// Animation
import { motion, AnimatePresence } from "framer-motion";
// lib
import MenuItem from "./menuItem";
import { menus } from "../lib/menus";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSignInDropdown, setShowSignInDropdown] = useState(false);


  const toggleMenu = () => setOpen((prev) => !prev);

  const pathName = usePathname();

  // Menu animation
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  // Overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Parent menu controls the staggered child
  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Link menu animation
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className=" w-full px-5  md:max-w-3xl  lg:max-w-7xl mx-auto">
      {/* Mobile Menu */}
      <div className="md:hidden w-full py-3 px-1  flex items-center justify-between">
        {/* Logo,signup & Menu */}
        <Link href="/">
          <Image src={Icon} alt="velora"></Image>
        </Link>

        <div className="flex justify-between items-center gap-4">
          <Link href="/signup" className="md:block border border-[#A1C249] rounded-full px-4 py-2 text-sm font-medium text-[#A1C249] hover:bg-[#A1C249] hover:text-white transition-colors duration-300">
            <p>Sign Up</p>
          </Link>

          <Button
            variant={"outline"}
            size={"icon"}
            aria-label="open menu"
            className="rounded-full p-5"
            onClick={toggleMenu}
          >
            <Menu />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="bg-black/50 h-full w-full  flex justify-start gap-8 fixed inset-0  z-50   "
            onClick={toggleMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className=" w-1/2 h-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icon */}
              <div className="flex items-center justify-between p-4">
                <Link href="/">
                  <Image src={logo} alt="velora"></Image>
                </Link>

                {/* Close btn */}
                <Button
                  variant={"outline"}
                  size={"icon"}
                  aria-label="close"
                  className="rounded-full"
                  onClick={toggleMenu}
                >
                  <X />
                </Button>
              </div>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={listVariants}
                className="flex flex-col gap-6 mt-10 pl-5"
              >
                {menus.map((menu) => {
                  const href = menu === "Home" ? "/" : `/${menu.toLowerCase()}`;
                  const isActive = pathName === href;

                  return (
                    <MenuItem
                      key={menu}
                      label={menu}
                      href={href}
                      isActive={isActive}
                      itemVariants={itemVariants}
                      onClick={toggleMenu}
                    />
                  );
                })}
              </motion.ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <nav className=" dark:bg-gray-800 w-full  py-4 md:flex items-center justify-between px-2 hidden ">
        {/* logo & Menu */}
        <div className="flex gap-12">
          <Link href="/">
            <Image src={Icon} alt="velora"></Image>
          </Link>
          <ul className="flex items-center gap-12">
            {menus
              .filter((menu) => menu !== "Sign In")
              .map((menu, idx) => {
                const href = menu === "Home" ? "/" : `/${menu.toLowerCase()}`;
                const isActive = pathName === href;

                return (
                  <MenuItem
                    key={idx}
                    label={menu}
                    href={href}
                    isActive={isActive}
                  />
                );
              })}
          </ul>
        </div>

        {/* search bar, wishlist icon and cart, signup & signin btn */}
        <div className="ml-4 flex items-center gap-9">
          <div className="bg-[#ECECEC] px-7 py-2 relative rounded-3xl">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="pr-3 placeholder:text-sm focus:outline-none"
              aria-label="Search"
            />
            <Image
              src={Search}
              alt="search"
              className="absolute right-3.5 top-2.5 w-5 h-5 "
            ></Image>
          </div>


          <Link href="/wishlist"
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "!rounded-full"
            })}
            aria-label="wishlist"
          >
            <Image
              src={heartIcon}
              alt="wishlist"
              className="w-7 h-7"></Image>
          </Link>

          <Link
            href="/cart"
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "!rounded-full "
            })}
            aria-label="cart"
          >
            <Image src={cartIcon} alt="cart" className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-3 border border-[#A1C249] rounded-full px-6 py-3 text-sm font-medium text-[#A1C249] ">
            <Link href="/signup" className=" text-sm font-medium">
              Sign Up
            </Link>
            {showSignInDropdown ? (
              <ChevronUp
                className=" w-5 h-5 cursor-pointer"
                onClick={() => setShowSignInDropdown(false)}
              />
            ) : (
              <ChevronDown
                className=" w-5 h-5 cursor-pointer"
                onClick={() => setShowSignInDropdown(true)}
              />
            )}
            {/* Hidden Sign In */}
            {showSignInDropdown && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="absolute top-[76px] right-0 -translate-x-[124px] bg-[#A1C249]/50 px-6 py-3 text-black flex items-center gap-3 rounded-md"
              >
                <User className="" />
                <Link href="/signin" className=" text-sm font-medium ">
                  Sign In
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
