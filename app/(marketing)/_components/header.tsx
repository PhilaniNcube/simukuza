"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "h-16 bg-white bg-opacity-80 shadow-md"
          : "h-20 md:h-24 bg-white"
      }`}
    >
      <div className=" mx-auto container max-w-7xl px-4 h-full flex items-center justify-between">
        <Link href="/"
          className={`font-bold transition-all duration-300 ease-in-out ${
            isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          }`}
        >
          Simukuza
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cars" className="hover:text-blue-600">
                Cars
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container mx-auto px-4 py-2">
            <ul onClick={toggleMobileMenu} className="space-y-2">
              <li>
                <Link href="/" className="block py-2 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="block py-2 hover:text-blue-600">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
