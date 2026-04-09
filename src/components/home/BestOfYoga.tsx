import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";

const features = [
  {
    title: "Re-Energize",
    description:
      "That this group would somehow form a family the way we all became the Brady Bunch.",
    image: "/images/home/re-energize.png",
  },
  {
    title: "Strength Building",
    description:
      "That this group would somehow form a family the way we all became the Brady Bunch.",
    image: "/images/home/strength-building.png",
  },
  {
    title: "Stress Relief",
    description:
      "That this group would somehow form a family the way we all became the Brady Bunch.",
    image: "/images/home/stress-relief.png",
  },
  {
    title: "Relax & Refresh",
    description:
      "That this group would somehow form a family the way we all became the Brady Bunch.",
    image: "/images/home/relax-refresh.png",
  },
  {
    title: "Beauty of Body",
    description:
      "That this group would somehow form a family the way we all became the Brady Bunch.",
    image: "/images/home/beauty-body.png",
  },
  {
    title: "Mind & Soul",
    description:
      "That this group would somehow form a family the way we all became the Brady Bunch.",
    image: "/images/home/mind-soul.png",
  },
];

export const BestOfYoga: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AppTitle
          title="The Best of Yoga"
          subtitle="Discover the incredible benefits of practicing yoga"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-3 sm:mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="mx-auto w-12 h-12 sm:w-15 sm:h-15"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/home/yoga-features.png"
              alt="Yoga Features"
              width={400}
              height={1175}
              className="w-40 sm:w-48 lg:w-60"
            />
          </div>
          <div className="space-y-6 sm:space-y-8 order-3">
            {features.slice(3).map((feature, index) => (
              <div key={index + 3} className="text-center">
                <div className="mb-3 sm:mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="mx-auto w-12 h-12 sm:w-15 sm:h-15"
                  />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
