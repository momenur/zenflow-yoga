import Link from "next/link";

interface AppLogoProps {
  className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ className = "" }) => (
  <Link
    href="/"
    className={`flex items-center space-x-2 sm:space-x-3 group ${className}`}
  >
    <div className="relative">
      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 transform bg-linear-to-br from-cyan-600 to-cyan-500 rounded-xl group-hover:rotate-12">
        <span className="font-bold text-white text-sm sm:text-lg">zF</span>
      </div>
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full -top-1 -right-1 bg-cyan-500 animate-pulse"></div>
    </div>
    <span className="font-bold text-transparent text-sm sm:text-base lg:text-lg bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text">
      zenFlow Yoga
    </span>
  </Link>
);

export default AppLogo;
