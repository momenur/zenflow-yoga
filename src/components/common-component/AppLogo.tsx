import Link from "next/link";

interface AppLogoProps {
  className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ className = "" }) => (
  <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
    <div className="relative">
      <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 transform bg-linear-to-br from-cyan-600 to-cyan-500 rounded-xl group-hover:rotate-12">
        <span className="font-bold text-white text-18">zF</span>
      </div>
      <div className="absolute w-4 h-4 rounded-full -top-1 -right-1 bg-cyan-500 animate-pulse"></div>
    </div>
    <span className="font-bold text-transparent text-md lg:text-lg bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text">
      zenFlow Yoga
    </span>
  </Link>
);

export default AppLogo;
