"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  description,
  contactInfo,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            {subtitle}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="text-gray-600">{contactInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
