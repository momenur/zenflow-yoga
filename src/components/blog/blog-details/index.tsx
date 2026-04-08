import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { yogaBlogPosts } from "../helpers/uiData";

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
    <article className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl py-16">
        {/* Header */}
        <div className="mb-8 mt-10">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-gray-600 mb-4">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/blog/placeholder.png"
            alt={post.title}
            fill
            className=""
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Blogs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
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
