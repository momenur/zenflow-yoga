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
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-4 max-w-10/12">
        <AppTitle title="Expert Instructors" subtitle="Meet Our Team" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={640}
                  height={640}
                  className="rounded-full mx-auto"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {instructor.name}
              </h4>
              <p className="text-gray-600 mb-4">{instructor.position}</p>
              <p className="text-gray-600 mb-4">{instructor.description}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Facebook
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Twitter
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
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
