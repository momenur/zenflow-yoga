"use client";

import React from "react";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import AppLogo from "../common-component/AppLogo";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 text-white">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>

      {/* Background oversized text */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-16">
        <span className="text-[6rem] text-center leading-[0.85] font-black uppercase tracking-[-0.08em] text-white/5 select-none md:text-[12rem] lg:text-[16rem]">
          zenFlow
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Logo and description */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <AppLogo className="scale-110" />
            <p className="text-slate-300 leading-relaxed max-w-xs text-sm sm:text-base">
              Transform your mind and body through the ancient practice of yoga.
              Join our community and discover inner peace, strength, and
              balance.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="group p-2 sm:p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="group p-2 sm:p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                aria-label="Behance"
                className="group p-2 sm:p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 9C6.11929 9 5 10.1193 5 11.5C5 12.8807 6.11929 14 7.5 14H10.5C11.8807 14 13 12.8807 13 11.5C13 10.1193 11.8807 9 10.5 9H7.5ZM5 17V19H10.5C11.3284 19 12 18.3284 12 17.5C12 16.6716 11.3284 16 10.5 16H5ZM7.5 11H10.5C10.7761 11 11 11.2239 11 11.5C11 11.7761 10.7761 12 10.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 11C18 11.8284 17.3284 12.5 16.5 12.5H14.5V17H12V7H16.5C17.3284 7 18 7.67157 18 8.5V11Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 7H14.5C15.8807 7 17 8.11929 17 9.5V10H18.5C19.8807 10 21 11.1193 21 12.5V13.5C21 14.8807 19.8807 16 18.5 16H17V17.5C17 18.3284 16.3284 19 15.5 19H12V7Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Classes", href: "/classes" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Hi@yogaaditama.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">+62821-5949-5854</p>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Indonesia</p>
                  <p className="text-slate-300 text-sm">Jln. Bambu No. 375</p>
                  <p className="text-slate-300 text-sm">
                    Samarinda, Kalimantan Timur
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Hong Kong</p>
                  <p className="text-slate-300 text-sm">60 Ya Fung Sung</p>
                  <p className="text-slate-300 text-sm">San Tsuen, 75129</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Yoga Journey?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Join our community and discover the transformative power of yoga.
              Book your first class today and experience the zenFlow difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            © Copyright 2024. zenFlow Yoga. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
