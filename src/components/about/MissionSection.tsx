import Image from "next/image";
import React from "react";

interface MissionSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const MissionSection: React.FC<MissionSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-7xl px-5 md:px-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            {subtitle}
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={imageSrc} alt={imageAlt} width={600} height={400} />
        </div>
      </div>
    </section>
  );
};
