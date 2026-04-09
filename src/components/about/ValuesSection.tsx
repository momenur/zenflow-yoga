import React from "react";

interface Value {
  title: string;
  description: string;
  icon?: string;
}

interface ValuesSectionProps {
  title: string;
  subtitle: string;
  values: Value[];
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({
  title,
  subtitle,
  values,
}) => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700">{subtitle}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              {value.icon && <div className="text-4xl mb-4">{value.icon}</div>}
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
