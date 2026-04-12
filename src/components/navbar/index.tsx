"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, BookOpen, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { AppLogo } from "../common-component";

const Navbar = () => {
  const pathName: string = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/blog", label: "Blog", icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="px-5 mx-auto max-w-7xl md:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <AppLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-6 lg:flex xl:space-x-8">
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
          <div className="items-center hidden space-x-3 lg:flex xl:space-x-4">
            <Link href="/log-in" className="cursor-pointer">
              <Button
                variant="outline"
                size="sm"
                className="text-sm transition-all duration-300 bg-white cursor-pointer hover:bg-cyan-500 hover:text-white"
              >
                <span className="mb-0.5">Login</span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                className="text-sm text-white transition-all duration-300 cursor-pointer bg-cyan-500 hover:bg-cyan-700"
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
              className="inline-flex items-center justify-center p-2 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-md hover:text-gray-900 hover:bg-gray-300 focus:outline-none "
              aria-expanded="false"
            >
              <Menu
                className="block w-5 h-5 sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <AppLogo />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 transition-all duration-200 rounded-md hover:bg-gray-100 hover:scale-110"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="flex flex-col flex-1 px-6 mt-6 space-y-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center text-xl font-medium transition-all duration-200 hover:bg-gray-50 hover:scale-105 ${
                    pathName === link.href
                      ? "text-cyan-600"
                      : "text-gray-700 hover:text-cyan-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-6 h-6 mr-3" />
                  {link.label}
                </Link>
              );
            })}
            <div className="grid grid-cols-2 gap-4 mt-auto mb-16">
              <Link href="/log-in" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="flex items-center justify-center w-full text-gray-700 transition-all duration-300 bg-white border-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:scale-105"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                <Button className="flex items-center justify-center w-full text-white transition-all duration-300 bg-cyan-500 hover:bg-cyan-700 hover:scale-105">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
