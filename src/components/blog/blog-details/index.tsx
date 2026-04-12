import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { yogaBlogPosts } from "../helpers/uiData";
import { ArrowLeft } from "lucide-react";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = yogaBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related blogs (3 blogs after current, wrapping around)
  const currentIndex = yogaBlogPosts.findIndex((p) => p.id === post.id);
  const relatedBlogs = [];
  for (let i = 1; i <= 3; i++) {
    const index = (currentIndex + i) % yogaBlogPosts.length;
    relatedBlogs.push(yogaBlogPosts[index]);
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl px-4 py-16 mx-auto">
        {/* Header */}
        <div className="mt-10 mb-8">
          <Link
            href="/blog"
            className="inline-block items-center gap-2.5 mb-4 text-gray-600 hover:text-blue-800"
          >
            <div className="flex items-center gap-2.5">
              <ArrowLeft /> Back to Blog
            </div>
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-gray-600">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative mb-8 overflow-hidden rounded-lg h-96">
          <Image
            src="/images/blog/placeholder.png"
            alt={post.title}
            fill
            className=""
          />
        </div>

        {/* Content */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Blogs */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedBlogs.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="relative h-32">
                  <Image
                    src="/images/blog/placeholder.png"
                    alt={relatedPost.title}
                    fill
                    className=""
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
