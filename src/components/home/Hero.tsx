import Image from "next/image";
import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4  relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimateOnScroll className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs sm:text-sm text-white font-medium hover:bg-white/20 transition-all duration-300">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Welcome to Zenflow
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Mind & Body
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
                Discover the perfect balance through yoga. Experience
                mindfulness, strength, and inner peace in our welcoming
                community.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                <span className="relative z-10">Explore Classes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400">
                  500+
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Active Members
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-purple-400">
                  50+
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Classes Weekly
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-cyan-400">
                  4.9★
                </p>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Highly Rated
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Image Section */}
          <AnimateOnScroll className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative group max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
                <Image
                  src="/images/home/hero-image.png"
                  alt="Yoga pose"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-white/60 hover:text-white/100 transition-colors duration-300">
          <span className="text-xs sm:text-sm font-medium">
            Scroll to explore
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
