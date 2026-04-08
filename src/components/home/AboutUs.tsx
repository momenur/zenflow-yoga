import Image from "next/image";
import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { AppTitle } from "@/components/common-component";

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center max-w-10/12">
        <AnimateOnScroll className="w-full md:w-1/2 mb-8 md:mb-0">
          <AppTitle
            title="Welcome to Our Yoga Studio"
            subtitle="Find Your Inner Peace with Us"
            position="left"
          />

          <p className="text-gray-600 mb-8 leading-relaxed">
            Perspiciatis unde omnis iste natus sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Image
                src="/images/home/about-portrait.png"
                alt="Anthony Webster"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-semibold">Anthony Webster</p>
                <p className="text-gray-500 text-sm">CEO Yoga Studio</p>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">
              &quot;Nunc consequat justo eget enim finibus porta. Suspendisse
              orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In
              cursus ornare sollicitudin.&quot;
            </blockquote>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll className="w-full md:w-1/2">
          <Image
            src="/images/home/yoga-02.png"
            alt="Yoga class"
            width={800}
            height={569}
            className="mx-auto"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};
