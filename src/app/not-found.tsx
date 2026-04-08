import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Yoga pose illustration - simple SVG */}
        <div className="mb-8">
          <svg
            className="w-32 h-32 mx-auto text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.31 8l5.74 9.94" />
            <path d="M9.69 8l5.74 9.94" />
            <path d="M7.38 12l5.74 9.94" />
            <path d="M16.62 12l5.74 9.94" />
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for seems to have wandered off into a
          different pose. Let&apos;s get you back to your practice.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Link href="/">Return Home</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full border-blue-500 bg-transparent text-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <Link href="/about">Learn About Us</Link>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
