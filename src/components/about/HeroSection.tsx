import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage = "/images/home/yoga-01.png",
}) => {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-600 to-purple-700 py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center text-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <h2 className="text-2xl font-semibold mb-6">{subtitle}</h2>
        <p className="text-xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
};
