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
      <h2 className="text-3xl font-medium text-gray-800 tracking-wider">
        {title}
      </h2>
      <p className="text-gray-600">{subtitle}</p>

      {isBorder && (
        <span className="block w-5 rounded-full h-1 bg-blue-300 mx-auto mt-1" />
      )}
    </div>
  );
};

export default AppTitle;
