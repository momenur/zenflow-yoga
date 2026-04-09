import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";

const classes = [
  {
    title: "Hot Yoga",
    description:
      "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa.",
    image: "/images/home/yoga-hot.png",
  },
  {
    title: "Yin Yoga",
    description:
      "In cursus ornare sollicitudin. Ut libero urna, sollicitudin et porttitor id, tempus vitae nisl. Quisque a venenatis libero.",
    image: "/images/home/yoga-yin.png",
  },
  {
    title: "Hatha Yoga",
    description:
      "Suspendisse hendrerit tincidunt metus id sollicitudin. Praesent sed sapien id arcu congue dapibus dapibus nec est.",
    image: "/images/home/yoga-hatha.png",
  },
];

export const OurClasses: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AppTitle
          title="Our Classes"
          subtitle="Join A Class Today!"
          position="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 sm:mb-6">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  width={60}
                  height={60}
                  className="mx-auto w-12 h-12 sm:w-15 sm:h-15"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
                {cls.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {cls.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
