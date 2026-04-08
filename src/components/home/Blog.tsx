import Image from "next/image";
import React from "react";
import { AppTitle } from "@/components/common-component";

const blogPosts = [
  {
    title: "Nunc Volutpat Venenatis",
    excerpt:
      "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,...",
    comments: 4,
    image: "/images/home/nunc-volutpat-venenatis.jpg",
  },
  {
    title: "Vestibulum Nisl Felis",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.",
    comments: 5,
    image: "/images/home/vestibulum-nisl-felis.jpg",
  },
  {
    title: "Proin Eu Augue Efficitur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.",
    comments: 3,
    image: "/images/home/proin-eu-augue-efficitur.jpg",
  },
];

export const Blog: React.FC = () => {
  return (
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-4 max-w-10/12">
        <AppTitle title="Our Blog" subtitle="Latest Articles" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm">
                  {post.comments} Comments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
