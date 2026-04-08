import BlogDetailPage from "@/components/blog/blog-details";
import { yogaBlogPosts } from "@/components/blog/helpers/uiData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <BlogDetailPage params={resolvedParams} />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return yogaBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}
