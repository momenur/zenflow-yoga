import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 max-w-10/12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <AppTitle
              title="Why Choose Us"
              subtitle="We are committed to providing the best educational experience for our students"
              position="left"
              className="mb-6"
            />

            <p className="text-gray-600 mb-8 leading-relaxed">
              Perspiciatis unde omnis iste natus sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia.
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-700 transition"
            >
              Join Us Now
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/home/yoga-choose.png"
              alt="Why Choose Us"
              width={800}
              height={800}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
