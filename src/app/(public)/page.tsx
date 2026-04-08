import React from "react";
import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/AboutUs";
import { OurClasses } from "@/components/home/OurClasses";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BestOfYoga } from "@/components/home/BestOfYoga";
import { ExpertInstructors } from "@/components/home/ExpertInstructors";
import { Testimonials } from "@/components/home/Testimonials";
import { Blog } from "@/components/home/Blog";
import AnimateOnScroll from "@/components/home/AnimateOnScroll";

const Home: React.FC = () => {
  return (
    <>
      <AnimateOnScroll>
        <Hero />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AboutUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <OurClasses />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BestOfYoga />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ExpertInstructors />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blog />
      </AnimateOnScroll>
    </>
  );
};

export default Home;
