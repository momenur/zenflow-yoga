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
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-4 max-w-10/12">
        <AppTitle
          title="Our Classes"
          subtitle="Join A Class Today!"
          position="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  width={81}
                  height={81}
                  className="mx-auto"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {cls.title}
              </h4>
              <p className="text-gray-600">{cls.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
