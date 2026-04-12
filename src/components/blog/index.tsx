"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { yogaBlogPosts } from "./helpers/uiData";
import { AppLoader, AppTitle } from "@/components/common-component";
import BlogHero from "./BlogHero";

interface BlogPageProps {
  page?: number;
}

export default function BlogPage({ page = 1 }: BlogPageProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [page]);
  const postsPerPage = 9;
  const totalPages = Math.ceil(yogaBlogPosts.length / postsPerPage);
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = yogaBlogPosts.slice(startIndex, endIndex);

  const paginationPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="bg-gray-50 py-16 !min-h-screen">
      <AppLoader isLoading={isLoading} size="lg" text="Loading blog posts..." />
      <div className="container px-5 mx-auto max-w-7xl md:px-8">
        <div
          className={`transition-opacity duration-500 ${isLoading ? "opacity-30" : "opacity-100"}`}
        >
          {/* Hero Section */}
          <BlogHero articleCount={yogaBlogPosts.length} />

          <div id="articles" className="mb-12 text-center">
            <AppTitle
              title="Latest Yoga Insights"
              subtitle="Stay updated with our collection of yoga-related content"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="relative h-52">
                  <Image
                    src="/images/blog/placeholder.png"
                    alt={post.title}
                    fill
                    className=""
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-3 text-xl font-semibold text-gray-800 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-gray-600 line-clamp-3">
                    {post.content.split(".")[0]}.
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block px-4 py-2 text-white transition-colors duration-200 rounded-md bg-cyan-600 hover:bg-cyan-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
            <Link
              href={currentPage > 1 ? `/blog/page/${currentPage - 1}` : "/blog"}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === 1
                  ? "cursor-not-allowed opacity-50 border-cyan-500"
                  : "bg-white hover:bg-cyan-600 hover:text-white hover:border-cyan-600"
              }`}
            >
              Previous
            </Link>

            {paginationPages.map((pageNumber) => (
              <Link
                key={pageNumber}
                href={pageNumber === 1 ? "/blog" : `/blog/page/${pageNumber}`}
                className={`px-4 py-2 rounded-md border border-cyan-600 transition ${
                  pageNumber === currentPage
                    ? "bg-cyan-600 text-white"
                    : "bg-white hover:bg-cyan-600 hover:text-white hover:border-cyan-600"
                }`}
              >
                {pageNumber}
              </Link>
            ))}

            <Link
              href={
                currentPage < totalPages
                  ? `/blog/page/${currentPage + 1}`
                  : `/blog/page/${totalPages}`
              }
              className={`px-4 py-2 rounded-md border border-cyan-600 transition ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50 border-cyan-500"
                  : "bg-white hover:bg-cyan-600 hover:text-white hover:border-cyan-600"
              }`}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
