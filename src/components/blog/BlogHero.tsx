import Link from "next/link";

interface BlogHeroProps {
  articleCount: number;
}

const BlogHero = ({ articleCount }: BlogHeroProps) => {
  return (
    <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl overflow-hidden mb-16 mt-10 shadow-2xl">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative px-5 md:px-8 py-16 md:py-24 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Yoga Blog
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover insights, practices, and wisdom from the world of yoga.
          Explore articles on mindfulness, wellness, and spiritual growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#articles"
            className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore Articles
          </Link>
          <span className="text-cyan-100 text-sm md:text-base">
            {articleCount} articles available
          </span>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default BlogHero;
