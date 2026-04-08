import Image from "next/image";
import Link from "next/link";
import { yogaBlogPosts } from "./helpers/uiData";

interface BlogPageProps {
  page?: number;
}

export default function BlogPage({ page = 1 }: BlogPageProps) {
  const postsPerPage = 9;
  const totalPages = Math.ceil(yogaBlogPosts.length / postsPerPage);
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = yogaBlogPosts.slice(startIndex, endIndex);

  const paginationPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Yoga Blog</h1>
          <p className="text-lg text-gray-600">
            Discover insights, practices, and wisdom from the world of yoga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content.split(".")[0]}.
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          <Link
            href={currentPage > 1 ? `/blog/page/${currentPage - 1}` : "/blog"}
            className={`px-4 py-2 rounded-md border transition ${
              currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Previous
          </Link>

          {paginationPages.map((pageNumber) => (
            <Link
              key={pageNumber}
              href={pageNumber === 1 ? "/blog" : `/blog/page/${pageNumber}`}
              className={`px-4 py-2 rounded-md border transition ${
                pageNumber === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-100"
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
            className={`px-4 py-2 rounded-md border transition ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}
