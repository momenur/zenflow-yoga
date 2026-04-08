import React from "react";
import { AppTitle } from "@/components/common-component";

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
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 max-w-10/12">
        <AppTitle title="Testimonials" subtitle="What People Are Saying" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-left bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-gray-700 italic mb-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="text-gray-800 font-semibold">
                {testimonial.author}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonial.position}, {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
