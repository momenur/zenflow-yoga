import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className="order-2 lg:order-1">
            <AppTitle
              title="Why Choose Us"
              subtitle="We are committed to providing the best educational experience for our students"
              position="left"
              className="mb-4 sm:mb-6"
            />

            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Perspiciatis unde omnis iste natus sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-700 transition text-sm sm:text-base"
            >
              Join Us Now
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/home/yoga-choose.png"
              alt="Why Choose Us"
              width={800}
              height={800}
              className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
