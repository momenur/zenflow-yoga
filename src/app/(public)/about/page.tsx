import React from "react";
import AnimateOnScroll from "@/components/home/AnimateOnScroll";
import {
  HeroSection,
  MissionSection,
  TeamSection,
  ValuesSection,
  ContactSection,
} from "@/components/about";

const AboutPage: React.FC = () => {
  return (
    <>
      <AnimateOnScroll>
        <HeroSection
          title="About Our Yoga Studio"
          subtitle="Discover Your Inner Peace"
          description="Welcome to our sanctuary of wellness and mindfulness. We are dedicated to helping you achieve harmony between body, mind, and spirit through the ancient practice of yoga."
        />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <MissionSection
          title="Our Story"
          subtitle="A Journey of Wellness and Transformation"
          description="Founded with a passion for holistic health, our studio has been a beacon for yoga enthusiasts for over a decade. We believe that yoga is not just a physical practice, but a way of life that brings balance, strength, and serenity to everyone who walks through our doors."
          imageSrc="/images/home/yoga-02.png"
          imageAlt="Yoga practice in nature"
        />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <TeamSection
          title="Meet Our Expert Instructors"
          subtitle="Guided by Experienced Professionals"
          members={[
            {
              name: "Sarah Johnson",
              role: "Senior Yoga Instructor",
              imageSrc: "/images/home/about-portrait.png",
              bio: "With 15 years of experience, Sarah specializes in Hatha and Vinyasa yoga, helping students of all levels find their perfect practice.",
            },
            {
              name: "Michael Chen",
              role: "Meditation Guide",
              imageSrc: "/images/home/about-portrait.png",
              bio: "Michael brings mindfulness and meditation techniques to our classes, fostering mental clarity and emotional balance.",
            },
            {
              name: "Emma Rodriguez",
              role: "Wellness Coach",
              imageSrc: "/images/home/about-portrait.png",
              bio: "Emma combines yoga with nutrition and lifestyle coaching to support your complete wellness journey.",
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ValuesSection
          title="Our Core Values"
          subtitle="The Principles That Guide Us"
          values={[
            {
              title: "Inclusivity",
              description:
                "We welcome yogis of all ages, backgrounds, and experience levels to our community.",
              icon: "🤝",
            },
            {
              title: "Mindfulness",
              description:
                "We emphasize the importance of being present and cultivating awareness in every aspect of our practice.",
              icon: "🧘",
            },
            {
              title: "Holistic Health",
              description:
                "We believe in nurturing the body, mind, and spirit for complete well-being.",
              icon: "🌱",
            },
          ]}
        />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ContactSection
          title="Get In Touch"
          subtitle="We're Here to Help"
          description="Have questions about our classes, want to schedule a private session, or just want to say hello? We'd love to hear from you!"
          contactInfo={{
            address: "123 Wellness Street, Yoga City, YC 12345",
            phone: "(555) 123-YOGA",
            email: "info@yogastudio.com",
          }}
        />
      </AnimateOnScroll>
    </>
  );
};

export default AboutPage;
