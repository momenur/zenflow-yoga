"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#c7ff00] text-black">
      <div className="h-32" />
      {/* Background oversized text */}

      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-16">
        <span className="text-[8rem] text-center leading-[0.85] font-black uppercase tracking-[-0.08em] text-black/10 select-none md:text-[18rem] lg:text-[22rem]">
          WORK TOGETHER
        </span>
      </div>

      <div className="relative mx-auto max-w-10/12 px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </p>
            <div className="space-y-1">
              <p className="text-base font-bold">Hi@yogaaditama.com</p>
              <p className="text-base font-bold">+62821-5949-5854</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-2xl font-black leading-tight tracking-tight md:text-3xl lg:text-4xl">
              Goat a project? Want to collaborate?
            </h2>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b0cff] px-8 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:bg-[#0915d9]"
            >
              Discuss your project
              <span aria-hidden="true" className="text-lg">
                ▸
              </span>
            </a>
          </div>

          <div className="grid gap-8 text-sm justify-items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide">
                Indonesia
              </p>
              <p className="mt-1 font-bold">Jln. Bambu No. 375</p>
              <p className="font-bold">Samarinda, Kalimantan Timur</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide">
                Hong Kong
              </p>
              <p className="mt-1 font-bold">60 Ya Fung Sung</p>
              <p className="font-bold">San Tsuen, 75129</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/20 pt-8 text-sm md:flex-row">
          <p className="font-medium">
            © Copyright 2024. Aditama Studio. All rights reserved.
          </p>
          <a href="#" className="font-medium underline">
            Terms & Conditions
          </a>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Behance"
              className="rounded-full border border-black/10 bg-black/5 p-2 text-black transition hover:bg-black/10"
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
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-black/10 bg-black/5 p-2 text-black transition hover:bg-black/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-black/10 bg-black/5 p-2 text-black transition hover:bg-black/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
