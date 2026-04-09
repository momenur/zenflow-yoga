import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";
import { cn } from "@/lib/utils";

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
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <AppTitle
          title="Our Classes"
          subtitle="Join A Class Today!"
          position="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {classes.map((cls, index) => (
            <div
              key={index}
              className={cn(
                "text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300",
                {
                  "sm:col-span-2 lg:col-span-1": index === 2,
                },
              )}
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
