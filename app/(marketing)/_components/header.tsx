"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";

export default function Header({user}:{user:User | null}) {
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
      className={`fixed bg-black text-white top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "h-16 shadow-md" : "h-20 md:h-24"
      }`}
    >
      <div className=" mx-auto container max-w-7xl px-4 h-full flex items-center justify-between">
        <Link
          href="/"
          className={`font-bold  ${
            isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          }`}
        >
          <Image
            src="https://utfs.io/f/84aXfFFbF7G0FNpnsJvHiumMxpNarUk0XWRtAQjVevyqoB8Z"
            alt="Simukuza Automotive"
            width={200}
            height={50}
            className={cn(
              "object-cover transition-all duration-300 ease-in-out",
              isScrolled ? "w-52" : "w-56"
            )}
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 items-center">
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
            {user ? (
              <>
                <li>
                  <form action={logout}>
                    <Button
                      variant="outline"
                      className="border-accent bg-transparent hover:text-white"
                    >
                      Logout
                    </Button>
                  </form>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className="hover:text-blue-600">
                  Login
                </Link>
              </li>
            )}
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
          <nav className="container mx-auto px-4 py-2 text-black">
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
                <Link
                  href="/contact"
                  className="block py-2 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <form action={logout}>
                      <Button
                        variant="outline"
                        className="border-accent bg-transparent hover:text-white"
                      >
                        Logout
                      </Button>
                    </form>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="block py-2 "
                  >
                    <Button
                      variant="outline"
                      className="border-accent bg-transparent hover:text-white"
                    >
                      Login
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
