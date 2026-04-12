import { cn } from "@/lib/utils";
import React from "react";

interface AppTitleProps {
  title?: string;
  subtitle?: string;
  position?: "left" | "center" | "right";
  className?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({
  title = "My App",
  subtitle = "",
  position = "center",
  className = "mb-10",
}) => {
  const getPositionClass = () => {
    switch (position) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const isBorder = position === "center";

  return (
    <div className={cn(className, getPositionClass())}>
      <h2 className="text-2xl font-medium tracking-wider text-gray-800 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">{subtitle}</p>

      {isBorder && (
        <span className="block w-8 rounded-full h-0.5 sm:h-1 bg-cyan-400 mx-auto mt-2 sm:mt-3" />
      )}
    </div>
  );
};

export default AppTitle;
