"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Trigger after 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`max-w-screen-2xl w-full py-4 bg-gradient-to-r from-gray-700 to-gray-900 lg:bg-[#626568] flex items-center justify-between px-4 md:px-6 lg:px-16 sticky top-0 z-50 backdrop-blur-md transition-opacity duration-300 ${
          scrolled ? "opacity-80" : "opacity-100"
        }`}
      >
        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center mr-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon className="text-white w-6 h-6" />
        </button>

        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={"/MainLogo.png"}
            alt="Nepal Motor Logo"
            width={40}
            height={40}
          />
          <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold ml-2 tracking-wide">
            Nepal Motor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3 sm:space-x-4 md:space-x-6">
          <nav className="flex items-center space-x-4 sm:space-x-3 md:space-x-16 mr-16 text-sm">
            <Link
              href="/"
              className="text-white hover:text-red-500 text-xs font-medium transition-colors"
            >
              HOME
            </Link>
            {/* <Link
              href="/buy"
              className="text-white hover:text-gray-300 text-xs md:text-sm font-semibold transition-colors"
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className="text-white hover:text-gray-300 text-xs md:text-sm font-medium transition-colors"
            >
              Sell
            </Link>
            <Link
              href="/rent"
              className="text-white hover:text-gray-300 text-xs md:text-sm font-medium transition-colors"
            >
              Rent
            </Link> */}
            <Link
              href="/about"
              className="text-white hover:text-red-500 text-xs font-medium transition-colors"
            >
              ABOUT US
            </Link>

            <Link
              href="/models"
              className="text-white hover:text-red-500 text-xs font-medium transition-colors"
            >
              MODELS
            </Link>

            <Link
              href="/faq"
              className="text-white hover:text-red-500 text-xs font-medium transition-colors"
            >
              FAQS
            </Link>
          </nav>
          <Link
            href="/exchange"
            className="bg-[#A9C686] text-gray-900 px-3 sm:px-4 py-1.5 rounded-4xl text-xs md:text-sm font-medium hover:bg-[#93a17a] transition-colors whitespace-nowrap"
          >
            Exchange to EV
          </Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0f2a3f] shadow-lg z-50 animate-fade-in">
            <nav className="flex flex-col items-start px-6 py-4 space-y-3 items-center text-center justify-center">
              <Link
                href="/"
                className="text-white text-base font-semibold w-full py-1"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/buy"
                className="text-white text-base font-semibold w-full py-1"
                onClick={() => setMenuOpen(false)}
              >
                Buy
              </Link>
              <Link
                href="/sell"
                className="text-white text-base font-semibold w-full py-1"
                onClick={() => setMenuOpen(false)}
              >
                Sell
              </Link>
              <Link
                href="/rent"
                className="text-white text-base font-semibold w-full py-1"
                onClick={() => setMenuOpen(false)}
              >
                Rent
              </Link>
              <Link
                href="/exchange"
                className="bg-[#8B9D6B] text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-[#93a17a] transition-colors w-fit mt-2 self-center"
                onClick={() => setMenuOpen(false)}
              >
                Exchange to EV
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
