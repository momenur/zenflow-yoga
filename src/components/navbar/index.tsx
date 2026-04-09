"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { AppLogo } from "../common-component";

const Navbar = () => {
  const pathName: string = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <AppLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathName === link.href
                    ? "text-cyan-600 font-semibold"
                    : "text-gray-700 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link href="/log-in" className="cursor-pointer">
              <Button
                variant="outline"
                size="sm"
                className="bg-white hover:bg-cyan-500 hover:text-white cursor-pointer transition-all duration-300 text-sm"
              >
                <span className="mb-0.5">Login</span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                className="bg-cyan-500 hover:bg-cyan-700 text-white cursor-pointer transition-all duration-300 text-sm"
                size="sm"
              >
                <span className="mb-0.5">Get Started</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              ) : (
                <Menu
                  className="block h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 sm:px-6 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathName === link.href
                    ? "block px-3 py-2 rounded-md text-base font-medium text-cyan-600 bg-cyan-50"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition-colors duration-300"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2 border-t border-gray-200 mt-3 pt-3">
              <Link href="/log-in" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-gray-700 border-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                >
                  Login
                </Button>
              </Link>

              <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                <Button
                  size="sm"
                  className="w-full bg-cyan-500 text-white hover:bg-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
