import Image from "next/image";
import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { AppTitle } from "@/components/common-component";

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl px-5 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimateOnScroll className="order-2 lg:order-1">
            <AppTitle
              title="Welcome to Our Yoga Studio"
              subtitle="Find Your Inner Peace with Us"
              position="left"
            />

            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Perspiciatis unde omnis iste natus sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut.
            </p>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <Image
                  src="/images/home/about-portrait.png"
                  alt="Anthony Webster"
                  width={50}
                  height={50}
                  className="rounded-full mr-3 sm:mr-4"
                />
                <div>
                  <p className="text-gray-800 font-semibold text-sm sm:text-base">
                    Anthony Webster
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    CEO Yoga Studio
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic text-sm sm:text-base">
                &quot;Nunc consequat justo eget enim finibus porta. Suspendisse
                orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In
                cursus ornare sollicitudin.&quot;
              </blockquote>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="order-1 lg:order-2">
            <Image
              src="/images/home/yoga-02.png"
              alt="Yoga class"
              width={800}
              height={569}
              className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
