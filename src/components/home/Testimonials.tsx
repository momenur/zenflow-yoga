import React from "react";
import { AppTitle } from "@/components/common-component";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.",
    author: "Antonio Compbell",
    position: "Student",
    company: "Yoga Studio",
  },
  {
    quote:
      "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.",
    author: "Helena Smith",
    position: "Studio Manager",
    company: "Yoga Studio",
  },
  {
    quote:
      "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.",
    author: "Isabella Edwards Compbell",
    position: "Studio Manager",
    company: "Yoga Studio",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <AppTitle title="Testimonials" subtitle="What People Are Saying" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "text-left bg-gray-50 p-4 sm:p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300",
                {
                  "sm:col-span-2 lg:col-span-1": index === 2,
                },
              )}
            >
              <blockquote className="text-gray-700 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="text-gray-800 font-semibold text-sm sm:text-base">
                {testimonial.author}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                {testimonial.position}, {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
