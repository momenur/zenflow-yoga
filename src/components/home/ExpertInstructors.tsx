import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";

const instructors = [
  {
    name: "Lisa Mokovic",
    position: "Health Coacher",
    description:
      "Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo.",
    image: "/images/home/lisa-mokovic.jpg",
  },
  {
    name: "Jason Moran",
    position: "Yoga Trainer",
    description:
      "Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo.",
    image: "/images/home/jason-moran.jpg",
  },
  {
    name: "Kiana Chapman",
    position: "Yoga Trainer",
    description:
      "Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo.",
    image: "/images/home/kiana-chapman.jpg",
  },
];

export const ExpertInstructors: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AppTitle title="Expert Instructors" subtitle="Meet Our Team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 sm:mb-6">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                {instructor.name}
              </h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                {instructor.position}
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                {instructor.description}
              </p>
              <div className="flex justify-center space-x-3 sm:space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-cyan-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-cyan-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-cyan-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
