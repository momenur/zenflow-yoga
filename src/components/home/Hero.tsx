import Image from "next/image";
import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#1bb3eb] to-[#25efcb] py-28">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center max-w-10/12">
        <AnimateOnScroll className="w-full md:w-1/2 text-white">
          <h1 className="text-4xl font-bold">Yoga Studio</h1>
          <h2 className="text-5xl font-extrabold mt-2">
            Balance, Mind &amp; Body
          </h2>
          <p className="mt-4 text-lg max-w-md">
            Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc,
            rutrum quis nunc sed.
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-white text-[#1bb3eb] font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </AnimateOnScroll>
        <AnimateOnScroll className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/home/hero-image.png"
            alt="Yoga pose"
            width={800}
            height={888}
            className="mx-auto object-cover"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};
