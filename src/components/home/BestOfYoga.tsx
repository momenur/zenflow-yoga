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
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 max-w-10/12">
        <AppTitle
          title="The Best of Yoga"
          subtitle="Discover the incredible benefits of practicing yoga"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/home/yoga-features.png"
              alt="Yoga Features"
              width={400}
              height={1175}
              className="w-60"
            />
          </div>
          <div className="space-y-8">
            {features.slice(3).map((feature, index) => (
              <div key={index + 3} className="text-center">
                <div className="mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
