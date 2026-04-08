import BlogPage from "@/components/blog";
import { yogaBlogPosts } from "@/components/blog/helpers/uiData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    page: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const pageNumber = Number(page);
  const totalPages = Math.ceil(yogaBlogPosts.length / 9);

  if (Number.isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    notFound();
  }

  return <BlogPage page={pageNumber} />;
}

export async function generateStaticParams() {
  const totalPages = Math.ceil(yogaBlogPosts.length / 9);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}
