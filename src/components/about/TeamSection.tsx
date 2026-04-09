import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  bio: string;
}

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  subtitle,
  members,
}) => {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700">{subtitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h4>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
